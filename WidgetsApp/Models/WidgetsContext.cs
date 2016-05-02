using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WidgetsApp.Models
{
    public class WidgetsContext : DbContext
    {
        public WidgetsContext() { }

        public DbSet<Widget> Widgets { get; set; }
    }
}
