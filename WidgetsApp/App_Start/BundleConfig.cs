using System.Web;
using System.Web.Optimization;

namespace WidgetsApp.App_Start
{
		public static class BundleConfig
		{
				public static void RegisterBundles(BundleCollection bundles)
				{
						bundles.Add(new ScriptBundle("~/bundles/js").Include(
										"~/Scripts/jquery-{version}.js",
										"~/Scripts/bootstrap.js",
										"~/Scripts/angular.js",
										"~/Scripts/angular-ui-router.js",
										"~/Scripts/angular-sanitize.js",
										"~/Scripts/app/app.js"
						));

						bundles.Add(new StyleBundle("~/Content/css").Include(
																"~/Content/bootstrap.css",
																"~/Content/site.css"));

						// Set EnableOptimizations to false for debugging. For more information,
						// visit http://go.microsoft.com/fwlink/?LinkId=301862
						BundleTable.EnableOptimizations = false;
				}
		}
}