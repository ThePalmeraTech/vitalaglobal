class BlogPost < ApplicationRecord
  def self.random_image_url
    [
      'https://feminism-mena.fes.de/fileadmin/user_upload/images/blog/000_1MP11D-1.jpg',
      'https://www.euractiv.com/wp-content/uploads/sites/2/2023/06/shutterstock_2155198705.jpg',
      'https://www.thepublicdiscourse.com/wp-content/uploads/2021/07/AdobeStock_363832310-1024x683.jpeg',
      'https://bedbible.com/sex-education-statistics/',
      'https://www.thepublicdiscourse.com/wp-content/uploads/2021/07/AdobeStock_363832310-1024x683.jpeg',
      'https://siecus.org/wp-content/uploads/2018/07/sex-ed-human-right-blog.png',
      'https://www.hrw.org/sites/default/files/styles/opengraph/public/media_2022/06/202206us_wrd_abortionprotest.jpg?h=790be497&itok=kjGxLTCa',
      'https://snworksceo.imgix.net/dpn-34s/772081f6-8b1d-40ef-bbee-2de5f0f7b1f9.sized-1000x1000.jpeg?w=1000',
      'https://www.thehindu.com/opinion/lead/social-justice-sexual-education-the-need-of-our-times/article67588047.ece',
      'https://www.gendergp.com/sex-education-review-interview-sexologist/',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx4KmZUIqK-KqmPvbLvs_m_HWc4ZE2aBomVg&usqp=CAU',
      'https://helios-i.mashable.com/imagery/articles/02g96DpAfQ3Vx3umPu7InHW/hero-image.fill.size_1200x1200.v1623373254.jpg'
    ].sample
  end
end
