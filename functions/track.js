export const onRequest = async ({ request, env, params, waitUntil, next, data }) => {
  const clientUA = request.headers.get('User-Agent') || 'unknown Agent';
  const clientIP = request.headers.get('CF-Connecting-IP') || 'unknown IP';
  const clientASN = request.cf.asn || 'unknown asn';
  const clientISP = request.cf.asOrganization || 'unknown asOrganization';
  const clientCO = request.cf.country || 'unknown country';
  const clientCI = request.cf.city || 'unknown city';
  const clientRE = request.cf.region || 'unknown region';
  const clientLAT = request.cf.latitude || 'unknown latitude';
  const clientLON = request.cf.longitude || 'unknown longitude';
  const clientPC = request.cf.postalCode || 'unknown postalCode';
  const clientTZ = request.cf.timezone || 'unknown timezone';

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
