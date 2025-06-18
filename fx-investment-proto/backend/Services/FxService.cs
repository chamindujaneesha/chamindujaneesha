using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;

namespace Backend.Services
{
    public class FxService
    {
        private readonly HttpClient _http;
        public FxService(HttpClient http)
        {
            _http = http;
        }

        public async Task<decimal> ConvertAsync(string from, string to, decimal amount)
        {
            var url = $"https://api.exchangerate.host/convert?from={from}&to={to}&amount={amount}";
            var resp = await _http.GetFromJsonAsync<FxResponse>(url);
            return resp?.Result ?? 0m;
        }

        private class FxResponse
        {
            public decimal Result { get; set; }
        }
    }
}
