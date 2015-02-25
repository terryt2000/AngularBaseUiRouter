using System.Web.Optimization;

namespace AngularBase.App
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/libs").Include(
                "~/lib/jquery/dist/jquery.js",
                "~/lib/angular/angular.js",
                "~/lib/angular-animate/angular-animate.js",
                //"~/lib/angular-route/angular-route.js",
                "~/lib/angular-ui-router/release/angular-ui-router.js",
                "~/lib/lodash/dist/lodash.js",
                "~/lib/moment/min/moment.min.js",
                "~/lib/spin.js/spin.js",
                "~/lib/angular-toastr/dist/angular-toastr.tpls.js",
                "~/lib/angular-bootstrap/ui-bootstrap-tpls.js"
                ));
            // Set EnableOptimizations to false for debugging. For more information,
            // visit http://go.microsoft.com/fwlink/?LinkId=301862
            BundleTable.EnableOptimizations = false;
        }
    }
}