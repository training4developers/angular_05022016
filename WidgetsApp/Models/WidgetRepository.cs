using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WidgetsApp.Models
{
    public class WidgetRepository : IWidgetRepository
    {
        private readonly WidgetsContext _widgetsContext;

        public WidgetRepository(WidgetsContext widgetsContext)
        {
            _widgetsContext = widgetsContext;
        }

        public IEnumerable<Widget> GetAll()
        {
            return _widgetsContext.Widgets.ToList();
        }

        public Widget Get(int id)
        {
            return _widgetsContext.Widgets.FirstOrDefault(w => w.Id == id);
        }

        public Widget Add(Widget item)
        {
            _widgetsContext.Widgets.Add(item);
            _widgetsContext.SaveChanges();
            return item;
        }

        public void Remove(int id)
        {
            var widget = _widgetsContext.Widgets.FirstOrDefault(cs => cs.Id == id);
            if (!ReferenceEquals(widget, null))
            {
                _widgetsContext.Widgets.Remove(widget);
                _widgetsContext.SaveChanges();
            }
        }

        public bool Update(Widget item)
        {
            _widgetsContext.Entry(item).State = EntityState.Modified;
            return _widgetsContext.SaveChanges() == 1;
        }
    }
}