using Backend.Services;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Xunit;

namespace Backend.Tests
{
    public class FxServiceTests
    {
        private class FakeHandler : HttpMessageHandler
        {
            private readonly string _content;
            public FakeHandler(string content)
            {
                _content = content;
            }
            protected override Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
            {
                var response = new HttpResponseMessage(HttpStatusCode.OK)
                {
                    Content = new StringContent(_content)
                };
                return Task.FromResult(response);
            }
        }

        [Fact]
        public async Task ConvertAsync_ReturnsValue()
        {
            var json = "{\"result\":2}";
            var client = new HttpClient(new FakeHandler(json));
            var svc = new FxService(client);

            var result = await svc.ConvertAsync("USD", "EUR", 1);

            Assert.Equal(2, result);
        }
    }
}
