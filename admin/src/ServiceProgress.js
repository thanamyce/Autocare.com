import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ServiceProgressAdmin = () => {
    const [serviceProgress, setServiceProgress] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchServiceProgress = async () => {
            try {
                const response = await axios.get("http://localhost:5000/admin/service-progress");
                setServiceProgress(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching service progress:', error);
                setError('Failed to load service progress data.');
                setLoading(false);
            }
        };

        fetchServiceProgress();
    }, []);

    const handleUpdateStages = async (id, stages) => {
        // Ensure stages are checked in sequence
        const updatedStages = {
            diagnostics: stages.diagnostics || stages.mechanicalWorks || stages.finalTouches || stages.readyToPick, // Diagnostics must be checked first
            mechanicalWorks: stages.mechanicalWorks || stages.finalTouches || stages.readyToPick, // If Final Touches or Ready to Pick is checked, Mechanical Works must also be checked
            finalTouches: stages.finalTouches || stages.readyToPick, // Final Touches must be checked before Ready to Pick
            readyToPick: stages.readyToPick // Only this stage can be standalone
        };

        try {
            await axios.put(`http://localhost:5000/service-progress/${id}`, { stages: updatedStages });

            // Optimistically update the local state to reflect the change immediately
            const updatedProgressData = serviceProgress.map(progress =>
                progress._id === id ? { ...progress, stages: updatedStages } : progress
            );
            setServiceProgress(updatedProgressData);
        } catch (error) {
            setError('Failed to update service progress stages.');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h2>Service Progress Management</h2>
            {serviceProgress.length === 0 ? (
                <p>No service progress available.</p>
            ) : (
                serviceProgress.map((progress) => (
                    <div key={progress._id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                        <h3>Request ID: {progress._id}</h3>
                        <p>User ID: {progress.userId}</p>
                        <p>Package: {progress.servicePackageId.name}</p>

                        {/* Safely access vehicle details */}
                        {progress.vehicleId && (
                            <div>
                                <h4>Vehicle Details:</h4>
                                <p>Model: {progress.vehicleId.model}</p>
                                <p>Registration Number: {progress.vehicleId.registrationNumber}</p>
                            </div>
                        )}

                        {/* Stages Checkboxes */}
                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={progress.stages?.diagnostics || false}
                                    onChange={() =>
                                        handleUpdateStages(progress._id, {
                                            ...progress.stages,
                                            diagnostics: true
                                        })
                                    }
                                    disabled={progress.stages?.mechanicalWorks || progress.stages?.finalTouches || progress.stages?.readyToPick}
                                />
                                Diagnostics
                            </label>

                            <label>
                                <input
                                    type="checkbox"
                                    checked={progress.stages?.mechanicalWorks || false}
                                    onChange={() =>
                                        handleUpdateStages(progress._id, {
                                            ...progress.stages,
                                            diagnostics: true,
                                            mechanicalWorks: true
                                        })
                                    }
                                    disabled={!progress.stages?.diagnostics}
                                />
                                Mechanical Works
                            </label>

                            <label>
                                <input
                                    type="checkbox"
                                    checked={progress.stages?.finalTouches || false}
                                    onChange={() =>
                                        handleUpdateStages(progress._id, {
                                            ...progress.stages,
                                            diagnostics: true,
                                            mechanicalWorks: true,
                                            finalTouches: true
                                        })
                                    }
                                    disabled={!progress.stages?.mechanicalWorks}
                                />
                                Final Touches
                            </label>

                            <label>
                                <input
                                    type="checkbox"
                                    checked={progress.stages?.readyToPick || false}
                                    onChange={() =>
                                        handleUpdateStages(progress._id, {
                                            ...progress.stages,
                                            diagnostics: true,
                                            mechanicalWorks: true,
                                            finalTouches: true,
                                            readyToPick: true
                                        })
                                    }
                                    disabled={!progress.stages?.finalTouches}
                                />
                                Ready to Pick
                            </label>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default ServiceProgressAdmin;
