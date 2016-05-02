using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WidgetsApp.Models
{
    public class Widget
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string Size { get; set; }

        public string Color { get; set; }

        public int Quantity { get; set; }
    }
}