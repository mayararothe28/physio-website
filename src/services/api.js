/**
 * API Service for RevitaOrtho Physiotherapy Clinic
 * Fetches dynamic data from the API endpoint and handles async appointment submissions.
 */

export async function fetchClinicData() {
  try {
    const res = await fetch("/api/clinic-data.json", {
      headers: {
        "Accept": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch clinic data: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("API error fetching clinic data:", err);
    // Return structured fallback data if offline or in dev build
    return null;
  }
}

export async function submitAppointmentApi(appointmentPayload) {
  // Simulates asynchronous appointment booking request
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        bookingRef: `REV-${Math.floor(100000 + Math.random() * 900000)}`,
        data: appointmentPayload,
        timestamp: new Date().toISOString(),
      });
    }, 400);
  });
}
