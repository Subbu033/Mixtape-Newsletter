import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  constructor() { }
  headerItems = {
    //logo : "http://bit.ly/2OjyA8K",
    month : "February, 2020"
  };
  introduction = {
    title : "1Creativity is when it is unexpected and original",
    description : "1When asked about creativity people usually say they cant sketch or draw, remembering this disgruntled art teacher from school. But being creative isn't all about oil painting or creating the starry sky. We believe creativity lies in the unexpected- An iron monster that sucks up CO2 from air, an unusual approach to teaching a subject one has never heard off or, em, any thing that is unexpected, original, imaginative..."
  }
  topPicks = {
      quote : "Design is like painting except that the paint never dries.",
      illustration : "http://bit.ly/3aOXSop",
      artworkby : "Michele Marconi",
      artistlink : "https://www.behance.net/michelemarconi"
    };

  sideA = [
    {
      tag : "Perspective",
      title : "It’s Not Enough to Be Right - You Also Have to Be Kind",
      description : "Rayan Holiday writes about his perspective about empathetic and kind being more important than being Clever.",
      link : "https://forge.medium.com/its-not-enough-to-be-right-you-also-have-to-be-kind-b8814111fe1",
      imageURL : "http://bit.ly/317C8jk"
    },
    {
      tag : "Leadership",
      title : "My Experience with Burnout as a Startup Founder",
      description : "Experience with Burnout as a Startup Founder by Joel Gascoigne",
      link : "https://open.buffer.com/burnout/",
      imageURL : "http://bit.ly/38N5upx"
    },
    {
      tag : "Learning",
      title : "Mixing User Research & Data Science Methods",
      description : "How a three-step process for mixing qualitative and quantitative methods can avoid data discrepancies and fuel product decisions.",
      link : "https://spotify.design/articles/2019-07-17/simultaneous-triangulation-mixing-user-research-data-science-methods/",
      imageURL : "http://bit.ly/2UbKEMN"
    }
  ];

  nowRolling = [
    {
      title : "Anand Giridharadas talks at Google",
      link : "https://www.youtube.com/watch?v=d_zt3kGW1NM&t=2572s",
      image : "http://bit.ly/3aQfa4p"
    },
    {
      title : "HBR Predictions for 2020",
      link : "https://hbr.org/podcast/2020/01/predictions-for-2020",
      image : "http://bit.ly/2tPEM0Y"
    },
    {
      title : "How Supply Chain Transparency can help the Planet",
      link : "https://www.ted.com/talks/markus_mutz_how_supply_chain_transparency_can_help_the_planet",
      image : "http://bit.ly/2U6vrwq"
    }
  ];

  cassetteLibrary = [
    {
      title : "Adobe Aero",
      description : "The most intuitive way to view, build, and share immersive and interactive AR experiences.",
      link : "https://www.adobe.com/products/aero.html",
      image : "http://bit.ly/2t5qBUT"
    },
    {
      title : "30 Seconds of Code",
      description : "Short code snippets for all your development needs.",
      link : "https://www.30secondsofcode.org/",
      image : "http://bit.ly/37Diga1"
    },
    {
      title : "Sony Vision S",
      description : "Sony's Technology – Moving Towards Evolution in Mobility",
      link : "https://www.sony.net/SonyInfo/vision-s/",
      image : "http://bit.ly/2O9sQOj"
    }
  ]

  
}
