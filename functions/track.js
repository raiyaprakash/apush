export const onRequest = async ({ request, env, params, waitUntil, next, data }) => {
  const clientUA = request.headers.get('User-Agent') || 'unknown';
  const clientIP = request.headers.get('CF-Connecting-IP') || 'unknown';
  const clientASN = request.cf.asn || 'unknown';
  const clientISP = request.cf.asOrganization || 'unknown';
  const clientCO = request.cf.country || 'unknown';
  const clientCI = request.cf.city || 'unknown';
  const clientRE = request.cf.region || 'unknown';
  const clientLAT = request.cf.latitude || 'unknown';
  const clientLON = request.cf.longitude || 'unknown';
  const clientPC = request.cf.postalCode || 'unknown';
  const clientTZ = request.cf.timezone || 'unknown';

  const responseData = {
    userAgent: clientUA,
    ip: clientIP,
    asn: clientASN,
    isp: clientISP,
    country: clientCO,
    city: clientCI,
    region: clientRE,
    latitude: clientLAT,
    longitude: clientLON,
    postalCode: clientPC,
    timezone: clientTZ
  };

  return new Response(JSON.stringify(responseData, null, 2), {
    headers: { "Content-Type": "application/json" },
  });
};
