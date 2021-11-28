const offers = {
  title: '录取院校',
  subTitle: '',
  list: [
    {
      title: '',
      name: 'america',
      list: [
        {
          title: '康奈尔大学',
          subTitle: '文理学院',
          description:
            '康奈尔大学（英语：Cornell University）是一所位于美国纽约州伊萨卡的私立研究型大学，另有两所分校位于纽约市曼哈顿和卡塔尔教育城，是美洲大学协会的十二个创会成员之一，及NCAA体育赛事联盟常春藤盟校的成员，截止2020年10月，先后有超过61位校友、教职工和研究人员获颁诺贝尔奖（世界第十二）、1位菲尔兹奖得主、4位图灵奖得主',
          imgLink: 'school-logo/225px-Cornell_University.png',
          link: 'https://www.cornell.edu/',
        },
        {
          title: '康奈尔大学',
          subTitle: '酒店管理学院',
          description:
            '康奈尔大学（英语：Cornell University）是一所位于美国纽约州伊萨卡的私立研究型大学，另有两所分校位于纽约市曼哈顿和卡塔尔教育城，是美洲大学协会的十二个创会成员之一，及NCAA体育赛事联盟常春藤盟校的成员，截止2020年10月，先后有超过61位校友、教职工和研究人员获颁诺贝尔奖（世界第十二）、1位菲尔兹奖得主、4位图灵奖得主',
          imgLink: 'school-logo/225px-Cornell_University.png',
          link: 'https://www.cornell.edu/',
        },
        {
          title: '约翰霍普金斯大学',
          subTitle: '文理学院',
          description:
            '约翰斯·霍普金斯大学采用德国古老的海德堡大学研究所的概念，被认为是美国第一所研究型大学，是美洲大学协会的12个创始会员之一。它的成功引发了美国其它大学向研究型大学转型。美国国家科学基金会连续31年将该校列为全美科研经费开支最高的大学',
          imgLink:
            'https://brand.jhu.edu/assets/uploads/sites/5/2014/06/university_logo_small_vertical_blue.png',
          link: 'https://www.jhu.edu/',
        },
        {
          title: '南加利福尼亚大学',
          subTitle: '文理学院',
          description:
            '南加利福尼亚大学，位于加州洛杉矶市中心，由Robert M. Widney于1880年创立，是加州最古老的私立研究型大学。南加大拥有曾被评为全美国排名第一的电影学院、全美国排名第一的老龄学院、全美国排名第三的公共政策学院、全美国排名的第十的工程学院。',
          imgLink: 'school-logo/Usc_seal.gif',
          link: 'https://www.usc.edu/',
        },
        {
          title: '埃默里大学',
          subTitle: '文理学院',
          description:
            '埃默里大学（英语：Emory University），或译艾文理大学、艾默利大学，创校于1836年，为一位于美国乔治亚州亚特兰大都市地区迪卡尔布县德鲁伊山之私立菁英大学。默里大学的学校基金会财产在美国排第16名，在全世界是第21富有的，根据《美国新闻与世界报道》2017年美国大学排行榜排第20名，综合排名第82名。',
          imgLink: 'school-logo/Emory-University642.jpg',
          link: 'https://www.jhu.edu/',
        },
        {
          title: '密歇根大学-安娜堡分校',
          subTitle: '文理学院',
          description:
            '密歇根大学（英语：University of Michigan，简称：U-M、UM、U of M、UMich 或 Michigan），简称密大，位于美国密歇根州安娜堡，是一所公立研究型大学，为美洲大学协会的创始院校之一，是美国乃至世界顶尖的大学之一。',
          imgLink:
            'school-logo/270px-Seal_of_the_University_of_Michigan.svg.png',
          link: 'https://umich.edu/',
        },
        {
          title: '纽约大学',
          subTitle: '文理学院',
          description:
            '纽约大学（英语：New York University，缩写为NYU），于1831年成立，是一所位于纽约市曼哈顿的研究型私立大学。主要的校区位于曼哈顿格林威治村的附近区域，以华盛顿广场为中心，是全美国境内规模最大的私立非营利高等教育机构。',
          imgLink: 'school-logo/320px-New_York_University_Seal.png',
          link: 'https://www.nyu.edu/',
        },
        {
          title: '香港大学',
          subTitle: '专业任选',
          description:
            '香港大学（英语：The University of Hong Kong，缩写：HKU），简称港大，是香港的一所公立研究型大学，大学本部位于香港岛中西区龙虎山。香港大学成立于1911年，并于1912年3月11日正式办学，是香港最早建立的高等教育机构。成立之初，更是大英帝国在东亚成立的唯一一间大学，现时属于“QS世界百强大学”以及“泰晤士高等教育世界百强大学”。',
          imgLink: 'school-logo/200px-HKU_Coat_of_Arms.png',
          link: 'https://hku.hk/',
        },
        {
          title: '香港科技大学',
          subTitle: '专业任选',
          description:
            '香港科技大学（英语：The Hong Kong University of Science and Technology，缩写：HKUST），简称科大，是香港的一所公立研究型大学，位于香港新界西贡区清水湾半岛，现时属于“QS世界百强大学”以及“泰晤士高等教育世界百强大学”。',
          imgLink: 'school-logo/HKUST.png',
          link: 'https://hkust.edu.hk/',
        },
        {
          title: '哥伦比亚大学',
          subTitle: '商学院',
          description:
            '纽约市哥伦比亚大学（英语：Columbia University in the City of New York；通称：“哥伦比亚大学”；简称：“哥大”）是一所坐落于美国纽约曼哈顿上城晨边高地的私立研究型大学，是美洲大学协会的12个创始校之一，及NCAA体育赛事联盟常春藤盟校的成员。哥大是纽约州最古老的高等教育学府，也是美国历史第五悠久的高等教育机构',
          imgLink: 'school-logo/ColumbiaSeal.png',
          link: 'https://www.columbia.edu/',
        },
        {
          title: '南加利福尼亚大学',
          subTitle: '工学院',
          description:
            '南加利福尼亚大学，位于加州洛杉矶市中心，由Robert M. Widney于1880年创立，是加州最古老的私立研究型大学。南加大拥有曾被评为全美国排名第一的电影学院、全美国排名第一的老龄学院、全美国排名第三的公共政策学院、全美国排名的第十的工程学院。',
          imgLink: 'school-logo/Usc_seal.gif',
          link: 'https://www.usc.edu/',
        },
        {
          title: '纽约大学',
          subTitle: '工学院',
          description:
            '纽约大学（英语：New York University，缩写为NYU），于1831年成立，是一所位于纽约市曼哈顿的研究型私立大学。主要的校区位于曼哈顿格林威治村的附近区域，以华盛顿广场为中心，是全美国境内规模最大的私立非营利高等教育机构。',
          imgLink: 'school-logo/320px-New_York_University_Seal.png',
          link: 'https://www.nyu.edu/',
        },
        {
          title: '香港大学',
          subTitle: '商学院',
          description:
            '香港大学（英语：The University of Hong Kong，缩写：HKU），简称港大，是香港的一所公立研究型大学，大学本部位于香港岛中西区龙虎山。香港大学成立于1911年，并于1912年3月11日正式办学，是香港最早建立的高等教育机构。成立之初，更是大英帝国在东亚成立的唯一一间大学，现时属于“QS世界百强大学”以及“泰晤士高等教育世界百强大学”。',
          imgLink: 'school-logo/200px-HKU_Coat_of_Arms.png',
          link: 'https://hku.hk/',
        },
        {
          title: '香港大学',
          subTitle: '工学院',
          description:
            '香港大学（英语：The University of Hong Kong，缩写：HKU），简称港大，是香港的一所公立研究型大学，大学本部位于香港岛中西区龙虎山。香港大学成立于1911年，并于1912年3月11日正式办学，是香港最早建立的高等教育机构。成立之初，更是大英帝国在东亚成立的唯一一间大学，现时属于“QS世界百强大学”以及“泰晤士高等教育世界百强大学”。',
          imgLink: 'school-logo/200px-HKU_Coat_of_Arms.png',
          link: 'https://hku.hk/',
        },
        {
          title: '香港科技大学',
          subTitle: '商学院',
          description:
            '香港科技大学（英语：The Hong Kong University of Science and Technology，缩写：HKUST），简称科大，是香港的一所公立研究型大学，位于香港新界西贡区清水湾半岛，现时属于“QS世界百强大学”以及“泰晤士高等教育世界百强大学”。',
          imgLink: 'school-logo/HKUST.png',
          link: 'https://hkust.edu.hk/',
        },
      ],
    },
  ],
};

export { offers }
