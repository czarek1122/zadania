using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zadania
{
    function fixAge(arr) {

        var filtered = arr.filter(function (value, index, arr) {

            return value > 18;

        });

        filtered = filtered.filter(function (value, index, arr) {

            return value < 60;

        });

        if (filtered.length === 0) {
            return "NA";
        }

        return filtered;
    }
    
}