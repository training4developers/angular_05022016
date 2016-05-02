using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Formatting;
using System.Net.Http.Headers;
using System.Web.Http;

namespace WidgetsApp
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // turn on attribute routing for the REST service
            config.MapHttpAttributeRoutes();

            // return JSON for requests made from the browser location bar
            config.Formatters.JsonFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("text/html"));

            // setup the json serialize to use camel case
            config.Formatters.OfType<JsonMediaTypeFormatter>().First().SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
        }
    }
}
