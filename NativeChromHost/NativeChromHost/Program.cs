using System;
using System.IO;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace NativeChromHost
{
    class Program
    {
        static void Main(string[] args)
        {
            if(ReadExtensionMessage() != null || ReadExtensionMessage() != "")
            {
              
                Console.WriteLine(ReadExtensionMessage());
            }
        }

        public static string ReadExtensionMessage()
        {
            System.IO.Stream stdin = Console.OpenStandardInput();
            int length = 0;
            byte[] bytes = new byte[4];
            stdin.Read(bytes, 0, 4);
            length = System.BitConverter.ToInt32(bytes, 0);

            string input = "";
            for (int i = 0; i < length; i++)
                input += (char)stdin.ReadByte();


            var data = JsonConvert.DeserializeObject<JObject>(input);

            

            var imgeData = data["data"].Value<string>().Replace("data:image/jpeg;base64,", "");
            var imgBytes = Convert.FromBase64String(imgeData);

          //  File.AppendAllText(@"C:\temp\response.log", imgeData);

            using (var imageFile = new FileStream(@"C:\temp\" + data["fileNmae"].Value<string>(), 
                FileMode.Create))
            {
                imageFile.Write(imgBytes, 0, imgBytes.Length);
                imageFile.Flush();
            }

            return input;
        }
    }
}
