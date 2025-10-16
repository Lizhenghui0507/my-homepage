<template>
  <div class="about-detail-page">
    <!-- 导航栏 -->
    <nav class="navbar">
      <div class="nav-container">
        <div class="logo-container">
          <div class="logo-main">
            <div class="logo-wrapper">
              <img src="@/assets/logo.png" alt="大连多连喜保鲜剂有限公司" class="logo-image">
            </div>
            <div class="company-info">
              <h1 class="company-name">大连多连喜保鲜剂有限公司</h1>
              <p class="company-tagline">专业保鲜 · 绿色健康 · 值得信赖</p>
            </div>
          </div>
        </div>
        <ul class="nav-menu">
          <li><a href="#home" @click="goHome">返回首页</a></li>
        </ul>
      </div>
    </nav>

    <!-- 页面内容 -->
    <div class="page-content">
      <!-- 公司简介 -->
      <section class="company-intro-section">
        <div class="container">
          <h2 class="section-title">公司简介</h2>
          <div class="intro-content">
            <div class="intro-text">
              <p>1986年，<strong>日本多连喜株式会社</strong>成立于日本冈山县浅口市。公司30余年专注于研发、制造优质脱氧剂、干燥剂、各类保鲜剂、暖贴暖手袋以及相关机械设备，如自动投入机等。公司坚持不懈地秉承优良传统，在日本本土拥有极高的行业信誉和举足轻重的市场份额。</p>
              
              <p><strong>大连多连喜保鲜剂有限公司</strong>是日本多连喜株式会社在中国全资兴建的第一家公司和生产基地，于1999年落户大连经济技术开发区。大连公司将日本先进技术和国内市场情况相结合，与上海分公司、浙江平湖分公司合力协作，追求卓越品质、不断创新，在满足不同客户需求的同时，坚固了优良的企业信誉，使得多连喜这个品牌在日本本土巩固了行业龙头地位，也在中国市场迅猛发展。</p>
              
              <p>2008年，大连多连喜保鲜剂有限公司参与起草制定了《中国人民共和国国内贸易行业标准 食品用脱氧剂》（SB/T 10514-2008 食品用脱氧剂 2009年8月1日）。 
              </p>
              
              <p>大连多连喜保鲜剂有限公司致力于生产和销售高品质暖贴暖手袋、脱氧剂、干燥剂等食品保鲜剂。其中暖贴部分主要出口日本，返销日本市场，同时我们也为国内厂商定制、代加工。凭借食品保鲜剂优秀的品质，我们与国内众多食品厂商建立起了良好的合作关系，深得用户信赖和好评。</p>
              
              <p class="company-mission">我们的宗旨是让所有的客户都能根据自己的需要，使用到适合自己的优质产品。我们真诚期待与国内外新老朋友合作，本着互惠互利的原则，携手开拓国内外市场，共同创造21世纪美好天地。</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 发展历程 -->
      <div class="timeline-section">
        <h2 class="section-title">发展历程</h2>
        <div class="timeline">
          <div v-for="(item, index) in timeline" :key="index" class="timeline-item">
            <div class="timeline-year">{{ item.year }}</div>
            <div class="timeline-content">
              <h3 class="timeline-title">{{ item.title }}</h3>
              <p class="timeline-description">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 替换公司荣誉部分为会社/工厂分布 -->
      <section class="factories-section">
        <div class="container">
          <h2 class="section-title">会社/工厂分布</h2>
          <div class="factories-content">

            <div class="factories-details">
              <!-- 中国地区 -->
              <div class="region-detail">
                <h3 class="region-title">
                  中国 China
                </h3>
                <div class="factories-list">
                  <div class="factory-item main-factory" @click="openBaiduMap('dalian')">
                    <div class="factory-image">
                      <img src="@/assets/company-building.jpg" alt="大连工厂" class="factory-img">
                    </div>
                    <div class="factory-info">
                      <h4>大连多连喜保鲜剂有限公司</h4>
                      <p class="factory-subtitle">Dalian Dorency Preservative Co., Ltd.</p>
                      <p class="factory-address">📍 辽宁省大连市金州区拥政街道九里村215-3号</p>
                      <p class="factory-desc">中国首个生产基地，现代化生产设施</p>
                    </div>
                  </div>
                  
                  <div class="factory-item">
                    <div class="factory-image">
                      <img src="@/assets/company-building.jpg" alt="上海公司" class="factory-img">
                    </div>
                    <div class="factory-info">
                      <h4>多连喜(上海)国际贸易有限公司</h4>
                      <p class="factory-subtitle">Dorency (Shanghai) International Trading Co., Ltd.</p>
                      <p class="factory-address">📍 上海市延安西路 1228 弄2号 8F-F</p>
                      <p class="factory-desc">国际贸易与业务拓展中心</p>
                    </div>
                  </div>

                  <div class="factory-item">
                    <div class="factory-image">
                      <img src="@/assets/company-building.jpg" alt="平湖公司" class="factory-img">
                    </div>
                    <div class="factory-info">
                      <h4>多连喜保鲜科技(平湖)有限公司</h4>
                      <p class="factory-subtitle">Dorency (Shanghai) International Trading Co., Ltd.</p>
                      <p class="factory-address">📍 平湖市经济开发区兴平四路东侧599号</p>
                      <p class="factory-desc">国际贸易与业务拓展中心</p>
                    </div>
                  </div>

                </div>
              </div>

              <!-- 日本地区 -->
              <div class="region-detail">
                <h3 class="region-title">
                  日本 Japan
                </h3>
                <div class="factories-list">
                  <div class="factory-item">
                    <div class="factory-image">
                      <img src="@/assets/company-building.jpg" alt="本社工场" class="factory-img">
                    </div>
                    <div class="factory-info">
                      <h4>本社工場</h4>
                      <p class="factory-subtitle">Head Office Factory / Masuyorishima Factory</p>
                      <p class="factory-address">📍 岡山県浅口市鴨方町六条院西2320番地</p>
                      <p class="factory-desc">总部生产基地，集研发、生产于一体</p>
                    </div>
                  </div>

                  <div class="factory-item">
                    <div class="factory-image">
                      <img src="@/assets/company-building.jpg" alt="寄島工場" class="factory-img">
                    </div>
                    <div class="factory-info">
                      <h4>益寄島工場</h4>
                      <p class="factory-subtitle">Head Office Factory / Masuyorishima Factory</p>
                      <p class="factory-address">📍 岡山県浅口市寄島町12155番地142</p>
                      <p class="factory-desc">总部生产基地，集研发、生产于一体</p>
                    </div>
                  </div>
                  
                  <div class="factory-item">
                    <div class="factory-image">
                      <img src="@/assets/company-building.jpg" alt="关东营业所" class="factory-img">
                    </div>
                    <div class="factory-info">
                      <h4>関東営業所</h4>
                      <p class="factory-subtitle">Kanto Sales Office</p>
                      <p class="factory-address">📍 埼玉県さいたま市中央区新中里3丁目2-39</p>
                      <p class="factory-desc">销售与客户服务中心</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <!-- 友情链接 -->
      <section class="links-section">
        <div class="container">
          <h2 class="section-title">友情链接</h2>
          <div class="links-content">
            <div class="link-item">
              <div class="link-info">
                <span class="link-icon">🌐</span>
                <div class="link-details">
                  <h3>日本多连喜株式会社官方网站</h3>
                  <p>{{ japanWebsite }}</p>
                </div>
              </div>
              <a :href="japanWebsite" target="_blank" class="visit-btn">
                访问网站
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutDetail',
  data() {
    return {
      japanWebsite: 'http://www.dorency.com',
      timeline: [
        { 
          year: '1986', 
          title: '日本多连喜制造部建立', 
          description: '公司前身成立于日本冈山县浅口市' 
        },
        { 
          year: '1995', 
          title: '开发食品级脱氧剂', 
          description: '开发出食品级脱氧剂和二氧化碳吸除剂' 
        },
        { 
          year: '1996', 
          title: '低温脱氧剂研发成功', 
          description: '成功开发出能在低至-25℃环境下正常工作的低温脱氧剂' 
        },
        { 
          year: '1997', 
          title: '日本多连喜株式会社成立', 
          description: '正式成立株式会社，开启规模化发展' 
        },
        { 
          year: '1998', 
          title: '上海事务所成立', 
          description: '在中国上海设立首个办事处' 
        },
        { 
          year: '1999', 
          title: '大连公司成立', 
          description: '在中国大连建立第一个生产基地 - 大连多连喜保鲜剂有限公司' 
        },
        { 
          year: '2001', 
          title: '长效脱氧剂专利', 
          description: '成功开发出转包时间长达12小时的脱氧剂，并申请专利' 
        },
        { 
          year: '2002', 
          title: '上海公司成立', 
          description: '成立多连喜(上海)国际贸易有限公司' 
        },
        { 
          year: '2005', 
          title: '平湖公司成立', 
          description: '成立多连喜精细化工(平湖)有限公司' 
        },
        { 
          year: '2007', 
          title: '国际市场拓展', 
          description: '多连喜在中国及日本占有较高市场份额，并开始出口到中国以外的国际市场' 
        },
        { 
          year: '2008', 
          title: '参与制定行业标准', 
          description: '参与起草制定《中华人民共和国国内贸易行业标准 食品用脱氧剂》（SB/T 10514-2008）' 
        },
        { 
          year: '2009', 
          title: '上海新公司成立', 
          description: '上海新多连喜贸易有限公司成立' 
        },
        { 
          year: '2010', 
          title: '全球市场布局', 
          description: '多连喜产品更加与全球市场接轨，有50多家区域代理商' 
        },
        { 
          year: '2018', 
          title: '日本寄岛工厂投产', 
          description: '新建寄岛工厂正式投产运营' 
        },
        { 
          year: '2024', 
          title: '大连新工厂投产', 
          description: '大连新生产基地建成投产' 
        }
      ]
    };
  },
  methods: {
    goHome() {
      this.$router.push('/');
    },
    openBaiduMap(location) {
      if (location === 'dalian') {
        // 大连多连喜保鲜剂有限公司的位置
        const dalianUrl = 'https://map.baidu.com/search/%E8%BE%BD%E5%AE%81%E7%9C%81%E5%A4%A7%E8%BF%9E%E5%B8%82%E9%87%91%E5%B7%9E%E5%8C%BA%E6%8B%A5%E6%94%BF%E8%A1%97%E9%81%93%E4%B9%9D%E9%87%8C%E6%9D%91215-3%E5%8F%B7/@13551585.125,4717771,19z?querytype=s&da_src=shareurl&wd=%E8%BE%BD%E5%AE%81%E7%9C%81%E5%A4%A7%E8%BF%9E%E5%B8%82%E9%87%91%E5%B7%9E%E5%8C%BA%E6%8B%A5%E6%94%BF%E8%A1%97%E9%81%93%E4%B9%9D%E9%87%8C%E6%9D%91215-3%E5%8F%B7&c=167&src=0&pn=0&sug=0&l=19&b=(13552998.874645974,4713638.859999999;13554278.874645974,4714274.359999999)&from=webmap&biz_forward=%7B%22scaler%22:1,%22styles%22:%22pl%22%7D&device_ratio=1';
        window.open(dalianUrl, '_blank');
      }
    }
  }
};
</script>

<style scoped>
.about-detail-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fdf8 0%, #e8f5e9 100%);
}

/* 导航栏样式 */
.navbar {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(76, 175, 80, 0.2);
  padding: 0.8rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 30px rgba(76, 175, 80, 0.15);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 25px;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo-main {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 16px;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(76, 175, 80, 0.02) 100%);
  border: 1px solid rgba(76, 175, 80, 0.1);
}

.logo-wrapper {
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border: 2px solid #E8F5E9;
  box-shadow: 0 2px 8px rgba(76, 175, 80, 0.2);
}

.logo-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.company-info {
  display: flex;
  flex-direction: column;
}

.company-name {
  color: #2E7D32;
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 0.2rem 0;
  line-height: 1.1;
}

.company-tagline {
  color: #4CAF50;
  font-size: 0.75rem;
  margin: 0;
  font-weight: 500;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 1.5rem;
}

.nav-menu a {
  color: #2E7D32;
  text-decoration: none;
  font-weight: 600;
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  transition: all 0.3s ease;
  background: rgba(76, 175, 80, 0.1);
}

.nav-menu a:hover {
  background: #4CAF50;
  color: white;
  transform: translateY(-2px);
}

/* 页面内容样式 */
.page-content {
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: #2E7D32;
  margin-bottom: 3rem;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 80px;
  height: 4px;
  background: linear-gradient(135deg, #4CAF50, #2E7D32);
  margin: 1rem auto;
  border-radius: 2px;
}

/* 公司简介部分 */
.company-intro-section {
  padding: 60px 0;
  background: white;
}

.section-title {
  text-align: center;
  font-size: 2.2rem;
  color: #2c3e50;
  margin-bottom: 40px;
  font-weight: bold;
}

.intro-content {
  max-width: 1000px;
  margin: 0 auto;
}

.intro-text {
  line-height: 1.8;
  color: #555;
  font-size: 1.1rem;
}

.intro-text p {
  margin-bottom: 20px;
  text-align: justify;
}

.intro-text strong {
  color: #2c3e50;
  font-weight: 600;
}

.document-link {
  color: #3498db;
  text-decoration: none;
  margin-left: 8px;
  font-weight: 500;
}

.document-link:hover {
  text-decoration: underline;
  color: #2980b9;
}

.company-mission {
  font-style: italic;
  color: #2c3e50;
  background-color: #f8f9fa;
  padding: 20px;
  border-left: 4px solid #e74c3c;
  margin-top: 25px !important;
  border-radius: 4px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .company-intro-section {
    padding: 40px 0;
  }
  
  .section-title {
    font-size: 1.8rem;
    margin-bottom: 30px;
  }
  
  .intro-text {
    font-size: 1rem;
  }
}

/* 发展历程时间线 */
.timeline-section {
  padding: 60px 0;
  background: #f8f9fa;
}

.timeline {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #3498db;
  transform: translateX(-50%);
}

.timeline-item {
  display: flex;
  margin-bottom: 40px;
  position: relative;
}

.timeline-item:nth-child(odd) {
  flex-direction: row-reverse;
}

.timeline-year {
  flex: 0 0 100px;
  text-align: center;
  font-weight: bold;
  color: #2c3e50;
  font-size: 1.2rem;
}

.timeline-content {
  flex: 1;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin: 0 20px;
}

.timeline-title {
  color: #2c3e50;
  margin-bottom: 10px;
  font-size: 1.3rem;
}

.timeline-description {
  color: #555;
  line-height: 1.6;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .timeline::before {
    left: 30px;
  }
  
  .timeline-item {
    flex-direction: row !important;
    padding-left: 60px;
  }
  
  .timeline-year {
    position: absolute;
    left: 0;
    top: 0;
  }
}

/* 公司荣誉部分 */
/* 会社/工厂分布部分 */
.factories-section {
  padding: 60px 0;
  background: linear-gradient(135deg, #f8fff8 0%, #e8f5e9 100%);
}

.factories-content {
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
}

/* 地图可视化部分 */
.map-visual {
  position: relative;
  background: white;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 8px 32px rgba(76, 175, 80, 0.1);
  border: 1px solid #e8f5e9;
  text-align: center;
}

.map-image {
  width: 100%;
  max-width: 700px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
}

.map-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.map-marker {
  position: absolute;
  transform: translate(-50%, -50%);
  text-align: center;
}

.japan-marker {
  top: 30%;
  left: 75%;
}

.china-marker {
  top: 45%;
  left: 65%;
}

.marker-dot {
  width: 24px;
  height: 24px;
  background: #ff6b6b;
  border: 3px solid white;
  border-radius: 50%;
  margin: 0 auto 10px;
  box-shadow: 0 3px 12px rgba(255, 107, 107, 0.5);
  animation: pulse 2s infinite;
}

.marker-label {
  background: rgba(255, 255, 255, 0.95);
  padding: 6px 16px;
  border-radius: 18px;
  font-size: 1rem;
  font-weight: 700;
  color: #2e7d32;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.25);
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.15); }
  100% { transform: scale(1); }
}

/* 工厂详情部分 */
.factories-details {
  display: flex;
  flex-direction: column;
  gap: 35px;
}

.region-detail {
  background: white;
  border-radius: 15px;
  padding: 35px;
  box-shadow: 0 8px 32px rgba(76, 175, 80, 0.1);
  border: 1px solid #e8f5e9;
}

.region-title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.6rem;
  font-weight: 700;
  color: #2e7d32;
  margin-bottom: 30px;
  padding-bottom: 18px;
  border-bottom: 3px solid #4caf50;
}

.flag-icon {
  font-size: 2rem;
}

.factories-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.factory-item {
  display: flex;
  gap: 25px;
  padding: 30px;
  background: #f8fffb;
  border-radius: 15px;
  border-left: 5px solid #4caf50;
  transition: all 0.3s ease;
  align-items: stretch;
  min-height: 180px;
}

.factory-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(76, 175, 80, 0.2);
}

.factory-item.main-factory {
  border-left-color: #ff9800;
  background: linear-gradient(135deg, #fff8e1, #fff);
}

.factory-image {
  flex-shrink: 0;
  width: 200px;
  height: 150px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  align-self: center;
}

.factory-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.factory-item:hover .factory-img {
  transform: scale(1.08);
}

.factory-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.factory-info h4 {
  color: #2e7d32;
  font-size: 1.3rem;
  margin: 0 0 10px 0;
  font-weight: 700;
  line-height: 1.3;
}

.factory-subtitle {
  color: #666;
  font-size: 1rem;
  margin: 0 0 15px 0;
  font-style: italic;
  font-weight: 500;
}

.factory-address {
  color: #4caf50;
  font-weight: 600;
  margin: 8px 0;
  font-size: 1rem;
}

.factory-year {
  color: #ff9800;
  font-weight: 700;
  margin: 8px 0;
  font-size: 0.95rem;
}

.factory-desc {
  color: #666;
  margin: 15px 0 0 0;
  line-height: 1.6;
  font-size: 1rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .factories-content {
    gap: 30px;
  }
  
  .map-visual {
    padding: 20px;
  }
  
  .map-image {
    max-width: 100%;
  }
  
  .region-detail {
    padding: 25px;
  }
  
  .factory-item {
    flex-direction: column;
    text-align: center;
    padding: 25px;
    min-height: auto;
  }
  
  .factory-image {
    width: 100%;
    height: 200px;
    margin-bottom: 20px;
  }
  
  .region-title {
    font-size: 1.4rem;
    justify-content: center;
  }
  
  .japan-marker {
    top: 25%;
    left: 70%;
  }
  
  .china-marker {
    top: 40%;
    left: 60%;
  }
  
  .marker-dot {
    width: 20px;
    height: 20px;
  }
  
  .marker-label {
    font-size: 0.9rem;
    padding: 5px 12px;
  }
}

/* 图片占位符样式（如果图片不存在时显示） */
.factory-image:empty::before {
  content: "🏭";
  font-size: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #e8f5e9;
  border-radius: 10px;
  color: #4caf50;
}

.map-image:empty::before {
  content: "🗺️ 全球分布图";
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 350px;
  background: #e8f5e9;
  border-radius: 12px;
  font-size: 1.4rem;
  color: #4caf50;
  font-weight: 700;
}

/* 地图链接样式 */
/* 大连工厂点击样式 */
.factory-item.main-factory {
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
}

.factory-item.main-factory:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(76, 175, 80, 0.25);
  border-left-color: #ff9800;
}

.factory-item.main-factory:hover::after {
  content: '🗺️';
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 1.5rem;
  animation: bounce 2s infinite;
}

.click-hint {
  color: #4CAF50;
  font-size: 0.85rem;
  font-weight: 600;
  margin-top: 10px;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.factory-item.main-factory:hover .click-hint {
  opacity: 1;
  color: #ff9800;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-5px);
  }
  60% {
    transform: translateY(-3px);
  }
}

/* 其他工厂保持原样 */
.factory-item:not(.main-factory) {
  cursor: default;
}

/* 友情链接部分 */
/* 友情链接部分 */
.links-section {
  padding: 40px 0;
  background: white;
  margin: 2rem auto;
  border-radius: 15px;
  max-width: 1000px;
}

.links-content {
  max-width: 600px;
  margin: 0 auto;
}

.link-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, #f8fff8, #ffffff);
  padding: 20px 25px;
  border-radius: 12px;
  border: 1px solid #e8f5e9;
  transition: all 0.3s ease;
}

.link-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(76, 175, 80, 0.15);
  border-color: #4CAF50;
}

.link-info {
  display: flex;
  align-items: center;
  gap: 15px;
  flex: 1;
}

.link-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.link-details h3 {
  color: #2E7D32;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 5px 0;
}

.link-details p {
  color: #4CAF50;
  font-size: 0.9rem;
  margin: 0;
  font-family: monospace;
}

.visit-btn {
  background: linear-gradient(135deg, #4CAF50, #45a049);
  color: white;
  text-decoration: none;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(76, 175, 80, 0.3);
}

.visit-btn:hover {
  background: linear-gradient(135deg, #45a049, #3d8b40);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.4);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .links-section {
    padding: 30px 0;
    margin: 1rem auto;
  }
  
  .link-item {
    flex-direction: column;
    text-align: center;
    gap: 15px;
    padding: 20px;
  }
  
  .link-info {
    flex-direction: column;
    text-align: center;
  }
  
  .visit-btn {
    width: 100%;
    max-width: 200px;
  }
}
</style>