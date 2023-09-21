let news1 = {
    NewsName: "Hindistan Ayda!",
    NewsDate: "23-08-2023",
    NewsWriter: "Vidadi Ali",
    NewsCover: "https://isroquiz.mygov.in/images/banner.jpg",
    NewsParagraf: "<a href='https://www.isro.gov.in/Chandrayaan3.html' target='_blank'>" + 
    "Chandrayaan-3" + "</a>" + " programı - Hindistanın ən yeni və uğurlu nəticə verən Ay Kəşfi üçün vəzifələnmiş programadır. Bundan əvvəl də " + 
    "<a href='https://www.isro.gov.in/' target='_blank'>" + "ISRO" + "</a>" + " (Hindistan Kosmik Araştırma Mərkəzi) - tərəfindən 2 dəfə bu proqram gerçəkləşdirilmək üzrə planlaşdırılmışdı. Lakin bəzi əskikliklər ucbatından uğurlu nəticə əldə oluna bilinməmişdi. Amma Chandrayaan-3 programı vasitəsi ilə nəhayət ki, Hindistan bunu bacardı. Və beləcə Aya kosmik gəmi göndərən dördüncü ölkə oldu." +
    "  İnsan övladı bundan əvvəl ki, 3 uçuş zamanı Ayın ancaq görünən hissəsində fəaliyyət göstərə bilmişdi. Amma Hindistan isə Ayın görünməyən tərəfinə ilk uçuş edən ölkə oldu. Bir sözlə Ayın qaranlıq, heç vaxt Günəş işığı almayan üzü." + "<br>" + "<br>" +
    "Bir ilkə imza atan Hindistan Kosmik Agentliyinin Chandrayaan-3 ün Vikram gəmisi ilə yerinə yetirdiyi bu enişin 3 əsas vəzifəsinə aşağıda diqqət edək"+ "<br>"+ "<br>" +
    "1. Aya yumşaq eniş: Ayın cənub qütbündə yumşaq eniş" + "<br>" +
    "2. Rover Delivery: Ayın səthini araşdırmaq üçün bir rover, yəni araşdırma maşınının göndərilməsi."+ "<br>" +
    "3. Elmi Tədqiqat: Ayın geoloji quruluşunu, mineral tərkibini və atmosfer xüsusiyyətlərini tədqiq edən elmi təcrübələrin aparılması." + "<br>" + "<br>" +
    " Bununla artıq Hindistan Kosmik alanda müəyyən mövqe tutan və bütün kosmik araşdırmalarda başlıca rol oynayan bir dövlətə çevrildi." + 
    " Eniş zamanı təqdim olunan canlı yayımda Hindistanın baş naziri " + "<a href='https://tr.wikipedia.org/wiki/Narendra_Modi'>" + "Narendra Modi" + '</a>' + "nin çıxış etməsi baş tutan bu inkişafın Hindistan üçün bir çox tərəfdən, həmçinin, siyasi olaraq da çox mühim olmasının göstəricisi idi. "
}

let listOfBaza = [news1];


let lastSimvol = 0;
listOfBaza.forEach((bazaElement) => {
    localStorage.setItem("name" + lastSimvol, bazaElement.NewsName);
    localStorage.setItem("date" + lastSimvol, bazaElement.NewsDate);
    localStorage.setItem("writer" + lastSimvol, bazaElement.NewsWriter);
    localStorage.setItem("cover" + lastSimvol, bazaElement.NewsCover);
    localStorage.setItem("paragraf" + lastSimvol, bazaElement.NewsParagraf);
    lastSimvol++;
});

localStorage.setItem("lengthOfNews", listOfBaza.length);