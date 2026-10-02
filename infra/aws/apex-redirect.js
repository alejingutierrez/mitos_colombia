function handler(event) {
  var request = event.request;
  request.headers['x-mitos-stage'] = { value: request.headers.host.value === 'staging.mitosdecolombia.com' ? '1' : '0' };
  if (request.headers.host.value !== 'mitosdecolombia.com') return request;
  var parts = [];
  for (var key in request.querystring) {
    var item = request.querystring[key];
    var values = item.multiValue || [item];
    for (var i = 0; i < values.length; i++) parts.push(key + '=' + values[i].value);
  }
  var location = 'https://www.mitosdecolombia.com' + request.uri + (parts.length ? '?' + parts.join('&') : '');
  // Requests with literal control characters never become response headers.
  if (/[\x00-\x1f\x7f]/.test(location)) return { statusCode: 400, statusDescription: 'Bad Request' };
  return { statusCode: 308, statusDescription: 'Permanent Redirect', headers: { location: { value: location }, 'cache-control': { value: 'public,max-age=300' } } };
}
