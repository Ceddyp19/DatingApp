using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


//this is the object we're returning when the user logs in/ registers
namespace API.DTOs
{
    public class UserDto
    {
        public string Username { get; set; }
        public string Token { get; set; }
        public string PhotoUrl { get; set; }
    }
}