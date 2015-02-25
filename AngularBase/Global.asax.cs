using System.Web;
using System.Web.Http;
using System.Web.Optimization;
using AngularBase.App;

namespace AngularBase
{
    public class WebApiApplication : HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }
    }
}
