using System.Net;
using System.Web.Http;
using WidgetsApp.Models;

namespace WidgetsApp.Controllers.Api
{
	//[Authorize]
	[RoutePrefix("api/Widgets")]
	public class WidgetsController : ApiController
	{
		private readonly IWidgetRepository _widgetRepository;

		public WidgetsController(IWidgetRepository widgetRepository)
		{
			_widgetRepository = widgetRepository;
		}

		[Route("")]
		public IHttpActionResult GetAllWidgets()
		{
			return Ok(_widgetRepository.GetAll());
		}

		[Route("{id:int}")]
		public IHttpActionResult GetWidget(int id)
		{
			return Ok(_widgetRepository.Get(id));
		}

		[Route("")]
		public IHttpActionResult PostWidget([FromBody] Widget widget)
		{
			return Ok(_widgetRepository.Add(widget));
		}

		[Route("{id:int}")]
		public void PutWidget(int id, [FromBody] Widget widget)
		{
			widget.Id = id;
			if (!_widgetRepository.Update(widget))
			{
				throw new HttpResponseException(HttpStatusCode.NotFound);
			}
		}

		[Route("{id:int}")]
		public void DeleteWidget(int id)
		{
			_widgetRepository.Remove(id);
		}
	}
}