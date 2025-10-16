<template>
  <div id="app">
    <!-- 导航栏 -->
    <nav class="navbar">
      <div class="nav-container">
        <div class="logo-container">
          <div class="logo-main">
            <!-- 白色背景的Logo容器 -->
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
          <li><a href="#home">首页</a></li>
          <li><a href="#about">关于我们</a></li>
          <li><a href="#products">产品中心</a></li>
          <li><a href="#contact">联系我们</a></li>
        </ul>
      </div>
    </nav>

    <!-- 首页横幅 -->
    <section id="home" class="hero-banner">
      <div class="hero-content">
        <h1>专业保鲜剂生产专家</h1>
        <p>致力于为客户提供绿色、健康、安全的保鲜解决方案</p>
        <button class="cta-button" @click="goToAboutDetail">了解更多</button>
      </div>
    </section>

    <!-- 关于我们 -->
    <section id="about" class="about-section">
      <div class="container">
        <h2 class="section-title">关于我们</h2>
        <div class="about-content">
          <!-- 左侧：公司详细介绍 -->
          <div class="about-details">
            <div class="company-intro">
              <h3>公司简介</h3>
              <p><strong>大连多连喜保鲜剂有限公司</strong>是日本多连喜株式会社在中国全资兴建的第一家公司和生产基地，于1999年落户大连经济技术开发区。大连公司将日本先进技术和国内市场情况相结合，与上海分公司、浙江平湖分公司合力协作，追求卓越品质、不断创新，在满足不同客户需求的同时，坚固了优良的企业信誉，使得多连喜这个品牌在日本本土巩固了行业龙头地位，也在中国市场迅猛发展。</p>
              <p>公司主要生产经营各类脱氧剂、保鲜剂、干燥剂及怀炉系列产品。经过近二十年的发展，我们已经建立了完善的质量管理体系和先进的生产线，年生产能力达到5000万包，产品远销国内外市场，深受客户信赖。</p>
              <p>未来，我们将继续秉承"专业、创新、诚信、共赢"的经营理念，不断提升产品品质和服务水平，为客户创造更大价值，为推动中国保鲜剂行业的发展贡献力量。</p>
            </div>
          </div>

          <!-- 右侧：公司图片展示 -->
          <div class="about-visual">
            <!-- 主图区域 -->
            <div class="main-image-section">
              <div class="company-image" @click="openImageGallery(0)">
                <img :src="require('@/assets/company-building.jpg')" alt="公司建筑" class="main-image">
                <div class="image-overlay">
                  <h3>现代化生产基地</h3>
                  <div class="click-hint">点击查看详情</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 产品中心部分 -->
    <section id="products" class="products-section">
      <div class="container">
        <h2 class="section-title">产品中心</h2>
        
        <!-- 产品分类导航 -->
        <div class="product-categories">
          <button 
            v-for="category in productCategories" 
            :key="category.id"
            :class="['category-btn', { active: activeCategory === category.id }]"
            :data-category="category.id"
            @click="setActiveCategory(category.id)"
          >
            {{ category.name }}
          </button>
        </div>

        <!-- 产品展示区域 -->
        <div class="products-display">
          <!-- 保鲜剂系列 -->
          <div v-if="activeCategory === 'preservative'" class="product-category" data-category="preservative">
            <h3 class="category-title">保鲜剂系列</h3>
            <p class="category-description">专业保鲜解决方案，延长食品保质期，保持新鲜口感</p>
            
            <div class="carousel-container">
              <button class="carousel-btn carousel-prev" @click="prevSlide('preservative')">
                <span>‹</span>
              </button>
              
              <div class="carousel-track" ref="preservativeTrack">
                <div 
                  class="carousel-slide" 
                  v-for="(product, index) in preservativeProducts" 
                  :key="index"
                  :class="{ active: currentPreservativeIndex === index }"
                >
                  <div class="product-card">
                    <div class="product-image">
                      <img :src="product.image" :alt="product.name" class="product-img">
                      <div 
                        class="product-overlay" 
                        v-if="currentPreservativeIndex === index"
                        @click="openProductGallery('preservative', index)"
                      >
                        <span class="view-more">查看详情</span>
                      </div>
                    </div>
                    <div class="product-info">
                      <h4 class="product-name">{{ product.name }}</h4>
                      <p class="product-desc">{{ product.description }}</p>
                      <div class="product-features">
                        <span v-for="(feature, featureIndex) in product.features" :key="featureIndex" class="feature-tag">
                          {{ feature }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <button class="carousel-btn carousel-next" @click="nextSlide('preservative')">
                <span>›</span>
              </button>
            </div>
          </div>

          <!-- 怀炉系列 -->
          <div v-if="activeCategory === 'warmer'" class="product-category" data-category="warmer">
            <h3 class="category-title">暖贴系列</h3>
            <p class="category-description">专业保暖产品，为您提供持久的温暖体验</p>
            
            <div class="carousel-container">
              <button class="carousel-btn carousel-prev" @click="prevSlide('warmer')">
                <span>‹</span>
              </button>
              
              <div class="carousel-track" ref="warmerTrack">
                <div 
                  class="carousel-slide" 
                  v-for="(product, index) in warmerProducts" 
                  :key="index"
                  :class="{ active: currentWarmerIndex === index }"
                >
                  <div class="product-card">
                    <div class="product-image">
                      <img :src="product.image" :alt="product.name" class="product-img">
                      <div 
                        class="product-overlay" 
                        v-if="currentWarmerIndex === index"
                        @click="openProductGallery('warmer', index)"
                      >
                        <span class="view-more">查看详情</span>
                      </div>
                    </div>
                    <div class="product-info">
                      <h4 class="product-name">{{ product.name }}</h4>
                      <p class="product-desc">{{ product.description }}</p>
                      <div class="product-features">
                        <span v-for="(feature, featureIndex) in product.features" :key="featureIndex" class="feature-tag">
                          {{ feature }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <button class="carousel-btn carousel-next" @click="nextSlide('warmer')">
                <span>›</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系我们 -->
    <section id="contact" class="contact-section">
      <div class="container">
        <h2 class="section-title">联系我们</h2>
        <div class="contact-content">
          <!-- 左侧：联系信息 -->
          <div class="contact-info">
            <div class="contact-card">
              <h3>联系信息</h3>
              <div class="contact-item">
                <div class="contact-icon">🏢</div>
                <div class="contact-details">
                  <h4>公司地址</h4>
                  <p>辽宁省大连市金州区拥政街道九里村215-3号1层</p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">📞</div>
                <div class="contact-details">
                  <h4>联系电话</h4>
                  <p>0411-87860966</p>
                  <p>18640833143（李厂长）</p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">📧</div>
                <div class="contact-details">
                  <h4>电子邮箱</h4>
                  <p>dorency-dl@163.com</p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">🕒</div>
                <div class="contact-details">
                  <h4>工作时间</h4>
                  <p>周一至周五：8:30-17:30</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧：地图位置 -->
          <div class="map-section">
            <div class="map-card">
              <h3>我们的位置</h3>
              <div class="map-container">
                <div id="baidu-map" class="baidu-map"></div>
                <div class="map-actions">
                  <button class="map-btn" @click="openInBaiduMap">查看详细地图</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 页脚 -->
    <footer class="footer">
      <div class="container">
        <div class="copyright">
          <p>&copy; 2024 大连多连喜保鲜剂有限公司 版权所有 | 辽ICP备12345678号</p>
          <p>专业保鲜剂生产专家 - 为您提供优质的保鲜解决方案</p>
        </div>
      </div>
    </footer>

    <!-- 图片弹窗组件 -->
    <ImageGallery 
      :show="showImageGallery"
      :images="galleryImages"
      :initialIndex="currentImageIndex"
      @close="closeImageGallery"
    />
  </div>
</template>

<script>
import ImageGallery from '@/components/ImageGallery.vue'
export default {
  name: 'App',
  components: {
    ImageGallery
  },
  data() {
    return {
      // 产品分类数据
      productCategories: [
        { id: 'preservative', name: '保鲜剂系列' },
        { id: 'warmer', name: '暖贴系列' }
      ],
      activeCategory: 'preservative',

      // 轮播状态
      currentWarmerIndex: 0,
      currentPreservativeIndex: 0,
      
      // 产品数据
      warmerProducts: [
        {
          name: '普通粘贴型',
          description: '快速升温，持续保暖，优选材质，多层控温',
          image: require('@/assets/暖贴-10.png'),
          features: ['尺寸:87mm*110mm', '持续时间 (40˚c 以上):10小时', '最高温度/平均温度:63/52˚c']
        },
        {
          name: '迷你粘贴型',
          description: '快速升温，持续保暖，优选材质，多层控温',
          image: require('@/assets/暖贴-8-1.png'),
          features: ['尺寸:70mm*95mm', '持续时间 (40˚c 以上):8小时', '最高温度/平均温度:63/52˚c']
        },
        {
          name: '普通携带型',
          description: '快速升温，持续保暖，优选材质，多层控温',
          image: require('@/assets/暖贴-16.png'),
          features: ['尺寸:82mm*105mm', '持续时间 (40˚c 以上):16小时', '最高温度/平均温度:70/56˚c']
        },
        {
          name: '迷你携带型',
          description: '快速升温，持续保暖，优选材质，多层控温',
          image: require('@/assets/暖贴-8-2.png'),
          features: ['尺寸:60mm*90mm', '持续时间 (40˚c 以上):8小时', '最高温度/平均温度:70/58˚c']
        }
      ],
      
      preservativeProducts: [
        {
          name: '铁系自力反应型- C系',
          description: '烘培咖啡豆、烘焙咖啡粉、地瓜干等氧气排出同时会产生二氧化碳的食品。',
          image: require('@/assets/C系_咖啡豆.jpg'),
          features: ['三层：PET/普通纸/PE', '三层耐油耐水：PET/耐水耐油纸/PE']
        },
        {
          name: '铁系自力反应型- SQ系',
          description: '主要适用于绝大部分食品，如蛋糕、月饼、茶叶、海苔、等水分活性值处于中度和低度的食品。',
          image: require('@/assets/SQ_点心.jpg'),
          features: ['三层：PET/普通纸/PE', '三层耐油耐水：PET/耐水耐油纸/PE']
        },
        {
          name: '水份依存型﹣KWX系列',
          description: '适用于面、糕点、凉粉、火腿、生海带等。适用于高水分活度食品。',
          image: require('@/assets/KWX_火腿.jpg'),
          features: ['两层：杜邦纸/PET+PE ']
        },
        {
          name: '低温自力反应型- QT系',
          description: '冰皮月饼、鱼子酱、鹅肝, 以及在寒冷地区使用的食品。',
          image: require('@/assets/QT_鱼子酱.jpg'),
          features: ['三层耐油耐水：PET/耐水耐油纸/PE']
        },
        {
          name: '有机系脱氧剂﹣YC系',
          description: '适用于绝大部分食品，如蛋糕、月饼、茶叶、罐装食品等设有金属检测器的生产线。',
          image: require('@/assets/YC_罐装食品.jpg'),
          features: ['三层耐油耐水：PET/耐水耐油纸/PE']
        },
        {
          name: '有机系脱氧剂﹣YF系',
          description: '适用于绝大部分食品，如蛋糕、月饼、茶叶、紫菜、坚果类、精密仪器等设有金属检测器的生产线。',
          image: require('@/assets/YF_坚果.jpg'),
          features: ['三层耐油耐水：PET/耐水耐油纸/PE']
        },
        {
          name: '氧气指示剂﹣P系',
          description: '当指示剂为红色时表示食品袋内处于无氧状态（氧气浓度在0.1%以下），当指示剂为蓝色时表示食品袋内还有氧气存在。单片型。粘贴于脱氧剂表面，配合脱氧剂一起工作。',
          image: require('@/assets/P_宠物食品2.png')
        },
        {
          name: '酒精保鲜剂﹣AG系',
          description: '主要适用于麻薯类糕点，肉类加工食品，鱿鱼丝等干制海产品的防霉保鲜。',
          image: require('@/assets/AG_鱿鱼丝.jpg'),
          features: ['特殊材质']
        },
        {
          name: '干燥剂﹣DS系',
          description: '适用于航空部件、计算机器件、电子产品、皮革制品、医药、食品等行业的干燥防潮。',
          image: require('@/assets/DS_皮革制品.jpg'),
          features: ['双层：PET/PE']
        },
        {
          name: '二氧化碳吸收剂﹣Z系',
          description: '泡菜、蒜仁、栗子、等发酵食品。',
          image: require('@/assets/Z_泡菜.jpg'),
          features: ['单片型、以手工方式放入包装袋中。']
        }
      ],
      
      // 产品图库数据
      productGalleries: {
        warmer: [
          [
            { src: require('@/assets/暖贴-10.png'), alt: '暖贴产品-主图', title: '普通粘贴型 - 正面' },
            { src: require('@/assets/暖贴-10.png'), alt: '暖贴产品-细节', title: '普通粘贴型 - 背面' }
          ],
          [
            { src: require('@/assets/暖贴-8-1.png'), alt: '暖贴产品-主图', title: '迷你粘贴型 - 正面' },
            { src: require('@/assets/暖贴-8-1.png'), alt: '暖贴产品-细节', title: '迷你粘贴型 - 背面' }
          ],
          [
            { src: require('@/assets/暖贴-16.png'), alt: '暖贴产品-主图', title: '普通携带型 - 正面' },
            { src: require('@/assets/暖贴-16.png'), alt: '暖贴产品-细节', title: '普通携带型 - 背面' }
          ],
          [
            { src: require('@/assets/暖贴-8-2.png'), alt: '暖贴产品-主图', title: '迷你携带型 - 正面' },
            { src: require('@/assets/暖贴-8-2.png'), alt: '暖贴产品-细节', title: '迷你携带型 - 背面' }
          ]
        ],
        preservative: [
          [
            { src: require('@/assets/C系_咖啡豆.jpg'), alt: '使用场景', title: '使用场景' },
            { src: require('@/assets/IMG_6026.jpeg'), alt: '产品图', title: '产品图' }
          ],
          [
            { src: require('@/assets/SQ_点心.jpg'), alt: '使用场景', title: '使用场景' },
            { src: require('@/assets/IMG_6027.jpeg'), alt: '产品图', title: '产品图' }
          ],
          [
            { src: require('@/assets/KWX_火腿.jpg'), alt: '使用场景', title: '使用场景' },
            { src: require('@/assets/IMG_6016.jpeg'), alt: '产品图', title: '产品图' }
          ],
          [
            { src: require('@/assets/QT_鱼子酱.jpg'), alt: '使用场景', title: '使用场景' },
            { src: require('@/assets/IMG_6023.jpeg'), alt: '产品图', title: '产品图' }
          ],
          [
            { src: require('@/assets/YC_罐装食品.jpg'), alt: '使用场景', title: '使用场景' },
            { src: require('@/assets/IMG_6019.jpeg'), alt: '产品图', title: '产品图' }
          ],
          [
            { src: require('@/assets/YF_坚果.jpg'), alt: '使用场景', title: '使用场景' },
            { src: require('@/assets/IMG_6017.jpeg'), alt: '产品图', title: '产品图' }
          ],
          [
            { src: require('@/assets/P_宠物食品2.png'), alt: '使用场景', title: '使用场景' },
            { src: require('@/assets/IMG_6018.jpeg'), alt: '产品图', title: '产品图' }
          ],
          [
            { src: require('@/assets/AG_鱿鱼丝.jpg'), alt: '使用场景', title: '使用场景' },
            { src: require('@/assets/IMG_6024.jpeg'), alt: '产品图', title: '产品图' }
          ],
          [
            { src: require('@/assets/DS_皮革制品.jpg'), alt: '使用场景', title: '使用场景' },
            { src: require('@/assets/IMG_6075.jpeg'), alt: '产品图', title: '产品图' }
          ],
          [
            { src: require('@/assets/Z_泡菜.jpg'), alt: '使用场景', title: '使用场景' },
            { src: require('@/assets/IMG_6025.jpeg'), alt: '产品图', title: '产品图' }
          ],
        ]
      },

      // 图片弹窗相关数据
      showImageGallery: false,
      galleryImages: [
        {
          src: require('@/assets/company-building.jpg'),
          alt: '公司全景',
          title: '现代化生产基地 - 全景1'
        },
        {
          src: require('@/assets/company-building2.jpg'),
          alt: '公司全景',
          title: '现代化生产基地 - 全景2'
        },
        {
          src: require('@/assets/company-building3.jpg'),
          alt: '公司全景',
          title: '现代化生产基地 - 全景3'
        },
        {
          src: require('@/assets/company-building4.jpg'),
          alt: '公司全景',
          title: '现代化生产基地 - 全景4'
        }
      ],
      currentImageIndex: 0
    }
  },
  mounted() {
    // 添加滚动效果
    window.addEventListener('scroll', this.handleScroll);
    // 初始化轮播位置
    this.$nextTick(() => {
      this.updateCarouselPosition();
      this.initBaiduMap();
    });
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    setActiveCategory(categoryId) {
      this.activeCategory = categoryId;
      // 重置轮播索引
      this.currentWarmerIndex = 0;
      this.currentPreservativeIndex = 0;
      
      // 更新轮播位置
      this.$nextTick(() => {
        this.updateCarouselPosition();
      });
    },
    
    // 轮播导航方法
    nextSlide(category) {
      if (category === 'warmer') {
        const nextIndex = (this.currentWarmerIndex + 1) % this.warmerProducts.length;
        this.currentWarmerIndex = nextIndex;
      } else {
        const nextIndex = (this.currentPreservativeIndex + 1) % this.preservativeProducts.length;
        this.currentPreservativeIndex = nextIndex;
      }
      
      this.$nextTick(() => {
        this.updateCarouselPosition(false);
      });
    },
    
    prevSlide(category) {
      if (category === 'warmer') {
        const prevIndex = this.currentWarmerIndex === 0 ? 
          this.warmerProducts.length - 1 : this.currentWarmerIndex - 1;
        this.currentWarmerIndex = prevIndex;
      } else {
        const prevIndex = this.currentPreservativeIndex === 0 ? 
          this.preservativeProducts.length - 1 : this.currentPreservativeIndex - 1;
        this.currentPreservativeIndex = prevIndex;
      }
      
      this.$nextTick(() => {
        this.updateCarouselPosition(false);
      });
    },
    
    // 更新轮播位置
    updateCarouselPosition(smooth = false) {
      const category = this.activeCategory;
      const track = category === 'warmer' 
        ? this.$refs.warmerTrack 
        : this.$refs.preservativeTrack;
      
      if (track) {
        const activeSlide = track.querySelector('.carousel-slide.active');
        if (activeSlide) {
          const trackWidth = track.offsetWidth;
          const slideWidth = activeSlide.offsetWidth;
          const slideLeft = activeSlide.offsetLeft;
          
          const scrollPosition = slideLeft - (trackWidth / 2) + (slideWidth / 2);
          
          track.scrollTo({
            left: scrollPosition,
            behavior: smooth ? 'smooth' : 'auto'
          });
        }
      }
    },
    
    // 打开产品图库
    openProductGallery(category, productIndex) {
      this.galleryImages = this.productGalleries[category][productIndex];
      this.currentImageIndex = 0;
      this.showImageGallery = true;
    },

    goToAboutDetail() {
      window.scrollTo(0, 0);
      this.$router.push('/about-detail');
    },

    handleScroll() {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    },

    openImageGallery(index = 0) {
      this.currentImageIndex = index
      this.showImageGallery = true
    },

    closeImageGallery() {
      this.showImageGallery = false
    },
    
    // 初始化百度地图
    initBaiduMap() {
      // 检查百度地图API是否已加载
      if (typeof BMap !== 'undefined') {
        this.createMap();
      } else {
        // 动态加载百度地图API
        this.loadBaiduMapAPI();
      }
    },

    // 加载百度地图API
    loadBaiduMapAPI() {
      const script = document.createElement('script');
      script.src = `https://api.map.baidu.com/api?v=3.0&ak=zRCYptW1eyy9eS2ptkRgOhEfX2pPDBhO&callback=initBaiduMap`;
      document.head.appendChild(script);
      
      // 全局回调函数
      window.initBaiduMap = () => {
        this.createMap();
      };
    },

    // 创建地图实例
    createMap() {
      try {
        console.log('开始创建地图...');
        
        // 检查容器是否存在
        const mapContainer = document.getElementById('baidu-map');
        if (!mapContainer) {
          console.error('地图容器未找到');
          this.showStaticMapFallback();
          return;
        }

        // 公司坐标（使用更精确的坐标）
        const companyLng = 121.734822;
        const companyLat = 39.162731;
        
        // 使用 window.BMap 避免 ESLint 报错
        const BMap = window.BMap;
        
        if (!BMap) {
          console.error('BMap 未定义');
          this.showStaticMapFallback();
          return;
        }

        console.log('BMap 已加载:', BMap);
        
        // 创建地图实例
        this.map = new BMap.Map('baidu-map');
        
        // 创建坐标点
        const point = new BMap.Point(companyLng, companyLat);
        
        // 初始化地图
        this.map.centerAndZoom(point, 15);
        console.log('地图初始化完成');
        
        // 添加标注
        const marker = new BMap.Marker(point);
        this.map.addOverlay(marker);
        
        // 添加信息窗口
        const infoWindow = new BMap.InfoWindow(`
          <div style="padding: 10px; max-width: 200px;">
            <h4 style="margin: 0 0 8px 0; color: #2e7d32; font-size: 14px;">大连多连喜保鲜剂有限公司</h4>
            <p style="margin: 0; font-size: 12px; color: #666; line-height: 1.4;">
              辽宁省大连市金州区拥政街道九里村215-3号1层
            </p>
          </div>
        `);
        
        marker.addEventListener('click', () => {
          this.map.openInfoWindow(infoWindow, point);
        });
        
        // 启用滚轮缩放
        this.map.enableScrollWheelZoom(true);
        
        // 添加控件
        this.map.addControl(new BMap.NavigationControl());
        this.map.addControl(new BMap.ScaleControl());
        this.map.addControl(new BMap.OverviewMapControl());
        
        // 添加地图类型控件
        this.map.addControl(new BMap.MapTypeControl());
        
        console.log('地图创建完成');
        
      } catch (error) {
        console.error('创建地图失败:', error);
        this.showStaticMapFallback();
      }
    },

    // 在百度地图中打开
    openInBaiduMap() {
      try {
        const companyName = '大连多连喜保鲜剂有限公司';
        const companyAddress = '辽宁省大连市金州区拥政街道九里村215-3号1层';
        
        // 正确的大连金州区坐标（近似值）
        const lng = 121.734822;  // 经度
        const lat = 39.162731;   // 纬度
        
        console.log('使用坐标:', lng, lat);
        
        // 使用百度地图坐标直接定位
        const baiduUrl = `https://api.map.baidu.com/marker?location=${lat},${lng}&title=${encodeURIComponent(companyName)}&content=${encodeURIComponent(companyAddress)}&output=html&src=yourCompanyName`;
        
        console.log('打开百度地图:', baiduUrl);
        window.open(baiduUrl, '_blank');
        
      } catch (error) {
        console.error('打开地图失败:', error);
        // 最简备用方案
        const fallbackUrl = 'https://map.baidu.com/search/大连金州区九里村';
        window.open(fallbackUrl, '_blank');
      }
    },
    
    // 获取路线（保持不变）
    getDirections() {
      const url = 'https://map.baidu.com/dir/大连多连喜保鲜剂有限公司/我的位置/?mode=driving&region=大连&output=html';
      window.open(url, '_blank');
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Microsoft YaHei', 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
  background: #f8fdf8;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 导航栏样式 */
.navbar {
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(76, 175, 80, 0.2);
  padding: 0.8rem 0;
  position: fixed;
  width: 100%;
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
  padding: 0.5rem 1.5rem;
  border-radius: 16px;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #f8fff8 0%, #ffffff 100%);
  border: 2px solid #4CAF50;
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.2);
}

.logo-main:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(76, 175, 80, 0.3);
  border-color: #2E7D32;
}

.logo-wrapper {
  width: 65px;
  height: 65px;
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
  justify-content: center;
}

.company-name {
  color: #2E7D32;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.2rem 0;
  line-height: 1.1;
}

.company-tagline {
  color: #4CAF50;
  font-size: 0.8rem;
  margin: 0;
  font-weight: 500;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-menu a {
  color: #2E7D32;
  text-decoration: none;
  font-weight: 600;
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  transition: all 0.3s ease;
}

.nav-menu a:hover {
  background: #4CAF50;
  color: white;
  transform: translateY(-2px);
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(30px);
  box-shadow: 0 2px 40px rgba(76, 175, 80, 0.2);
  padding: 0.6rem 0;
}

/* 首页横幅 */
.hero-banner {
  background: linear-gradient(135deg, #43a047 0%, #66bb6a 100%);
  color: white;
  padding: 180px 0 120px;
  text-align: center;
  margin-top: 80px;
  position: relative;
  overflow: hidden;
}

.hero-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0,0 L100,0 L100,100 Z" fill="rgba(255,255,255,0.1)"/></svg>');
  background-size: cover;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-content h1 {
  font-size: 3.2rem;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.hero-content p {
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
}

.cta-button {
  background: #ffffff;
  color: #2e7d32;
  border: none;
  padding: 15px 40px;
  font-size: 1.1rem;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.cta-button:hover {
  background: #e8f5e9;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);
}

/* 关于我们部分 */
.about-section {
  padding: 100px 0;
  background: linear-gradient(to bottom, #ffffff, #f8fdf8);
}

.section-title {
  text-align: center;
  margin-bottom: 4rem;
  font-size: 2.8rem;
  color: #2e7d32;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 80px;
  height: 4px;
  background: linear-gradient(135deg, #4caf50, #2e7d32);
  margin: 1rem auto;
  border-radius: 2px;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  min-height: 500px;
}

.about-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.company-intro {
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(76, 175, 80, 0.15);
  border-left: 6px solid #4caf50;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.company-intro h3 {
  color: #2e7d32;
  margin-bottom: 2rem;
  font-size: 2rem;
  text-align: center;
  border-bottom: 2px solid #e8f5e9;
  padding-bottom: 1rem;
}

.company-intro p {
  margin-bottom: 1.5rem;
  line-height: 1.8;
  font-size: 1.1rem;
  color: #555;
  text-align: justify;
}

.company-intro p strong {
  color: #2e7d32;
  font-size: 1.2rem;
}

.about-visual {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.main-image-section {
  height: 100%;
}

.company-image {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(76, 175, 80, 0.25);
  height: 100%;
  min-height: 400px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.company-image:hover {
  transform: translateY(-5px);
}

.main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.company-image:hover .main-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(46, 125, 50, 0.95));
  color: white;
  padding: 2.5rem 2rem 2rem;
  text-align: center;
}

.image-overlay h3 {
  margin: 0 0 0.8rem 0;
  font-size: 1.5rem;
  font-weight: 600;
}

.click-hint {
  font-size: 0.9rem;
  opacity: 0.8;
  margin-top: 0.5rem;
}

/* 产品分类导航样式 */
.product-categories {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.category-btn {
  padding: 12px 24px;
  border: 2px solid #4CAF50;
  background: white;
  color: #2E7D32;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 1rem;
}

.category-btn:hover {
  background: #E8F5E9;
  transform: translateY(-2px);
}

.category-btn.active {
  background: #4CAF50;
  color: white;
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
}

/* 怀炉分类按钮样式 */
.category-btn[data-category="warmer"] {
  border: 2px solid #FFB347;
  background: white;
  color: #FFB347;
}

.category-btn[data-category="warmer"]:hover {
  background: #FFF5EE;
  border-color: #FF9500;
}

.category-btn[data-category="warmer"].active {
  background: linear-gradient(135deg, #FFB347, #FF9500);
  color: white;
  box-shadow: 0 4px 15px rgba(255, 179, 71, 0.4);
  border-color: #FF9500;
}

.category-title {
  text-align: center;
  color: #2E7D32;
  font-size: 2.2rem;
  margin-bottom: 1rem;
}

.category-description {
  text-align: center;
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* 轮播容器样式 */
.carousel-container {
  position: relative;
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 60px;
}

.carousel-track {
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  scroll-behavior: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding: 2rem 0;
  width: 100%;
}

.carousel-track::-webkit-scrollbar {
  display: none;
}

.carousel-slide {
  flex: 0 0 auto;
  transition: all 0.5s ease;
  cursor: pointer;
  width: 350px;
}

.carousel-slide:not(.active) {
  transform: scale(0.85);
  opacity: 0.6;
  filter: blur(1px);
  cursor: default;
  pointer-events: none;
}

.carousel-slide.active {
  transform: scale(1);
  opacity: 1;
  filter: blur(0);
  cursor: pointer;
  pointer-events: auto;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background: white;
  border: 2px solid #4caf50;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  font-size: 1.5rem;
  color: #2e7d32;
  font-weight: bold;
}

.carousel-btn:hover {
  background: #4caf50;
  color: white;
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 5px 15px rgba(76, 175, 80, 0.3);
}

.carousel-prev {
  left: 0;
}

.carousel-next {
  right: 0;
}

/* 产品卡片样式 */
.product-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(76, 175, 80, 0.15);
  transition: all 0.3s ease;
  width: 350px;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  cursor: default; /* 整个卡片默认不可点击 */
}

/* 只有激活状态的卡片覆盖层可点击 */
.carousel-slide.active .product-overlay {
  opacity: 1;
  cursor: pointer; /* 覆盖层可点击 */
}

.carousel-slide.active .product-card {
  box-shadow: 0 20px 50px rgba(76, 175, 80, 0.25);
}

.product-image {
  height: 250px;
  overflow: hidden;
  background: #f8fdf8;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.product-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(46, 125, 50, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.carousel-slide.active .product-overlay {
  opacity: 1;
}

.carousel-slide.active .product-img {
  transform: scale(1.05);
}

.view-more {
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0.8rem 1.5rem;
  border: 2px solid white;
  border-radius: 25px;
  transition: all 0.3s ease;
}

.carousel-slide.active .view-more:hover {
  background: white;
  color: #2e7d32;
}

.product-info {
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  cursor: default; /* 信息区域不可点击 */
}


.product-name {
  color: #2e7d32;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
}

.product-desc {
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  text-align: center;
  flex: 1;
}

.product-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.feature-tag {
  background: #e8f5e9;
  color: #2e7d32;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  border: 1px solid #c8e6c9;
  transition: all 0.3s ease;
  cursor: default; /* 特征标签不可点击 */
}

.feature-tag:hover {
  background: #4caf50;
  color: white;
  transform: translateY(-2px);
}

/* 怀炉系列的相应调整 */
.product-category[data-category="warmer"] .carousel-slide:not(.active) {
  pointer-events: none;
}

/* 怀炉产品卡片样式 */
.product-category[data-category="warmer"] .product-card {
  box-shadow: 0 15px 40px rgba(255, 179, 71, 0.2);
  border-top: 4px solid #FFB347;
  background: linear-gradient(to bottom, white, #FFFBF7);
}

.product-category[data-category="warmer"] .carousel-slide.active .product-card {
  box-shadow: 0 20px 50px rgba(255, 179, 71, 0.3);
  transform: translateY(-5px);
}

.product-category[data-category="warmer"] .product-name {
  color: #FF9500;
  font-weight: 700;
}

.product-category[data-category="warmer"] .product-overlay {
  background: linear-gradient(135deg, rgba(255, 179, 71, 0.9), rgba(255, 149, 0, 0.9));
}

.product-category[data-category="warmer"] .feature-tag {
  background: #FFE8D6;
  color: #FF9500;
  border: 1px solid #FFD1A4;
  font-weight: 500;
}

.product-category[data-category="warmer"] .feature-tag:hover {
  background: linear-gradient(135deg, #FFB347, #FF9500);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 3px 10px rgba(255, 179, 71, 0.3);
}

.product-category[data-category="warmer"] .carousel-btn {
  border: 2px solid #FFB347;
  color: #FFB347;
  background: white;
}

.product-category[data-category="warmer"] .carousel-btn:hover {
  background: linear-gradient(135deg, #FFB347, #FF9500);
  color: white;
  box-shadow: 0 5px 15px rgba(255, 179, 71, 0.4);
  transform: translateY(-50%) scale(1.1);
}

.product-category[data-category="warmer"] .category-title {
  color: #FF9500;
  text-shadow: 0 2px 4px rgba(255, 179, 71, 0.2);
}

.product-category[data-category="warmer"] .category-description {
  color: #FFB347;
  font-weight: 500;
}

.product-category[data-category="warmer"] .product-desc {
  color: #666;
  background: linear-gradient(to right, #FFF5EE, transparent);
  padding: 0.5rem;
  border-radius: 8px;
}

@keyframes pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.5; }
}

.product-category[data-category="warmer"] .carousel-slide.active .product-image::before {
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  background: linear-gradient(135deg, #FFB347, #FF9500);
  border-radius: 15px;
  z-index: -1;
  opacity: 0.3;
  animation: pulse 2s infinite;
}

/* 联系我们部分 */
/* 联系我们部分 */
.contact-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #f8fdf8 0%, #e8f5e9 100%);
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: stretch;
}

.contact-info, .map-section {
  display: flex;
  flex-direction: column;
}

/* 统一卡片样式 */
.contact-card, .map-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(76, 175, 80, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 400px;
}

/* 统一头部样式 */
.contact-card h3, .map-card h3 {
  color: #2e7d32;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
  text-align: center;
  border-bottom: 2px solid #e8f5e9;
  padding-bottom: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

/* 联系信息项目样式 */
.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  padding: 1rem 0;
  border-bottom: 1px solid #f5f5f5;
}

.contact-item:last-child {
  border-bottom: none;
}

.contact-icon {
  font-size: 1.4rem;
  background: #e8f5e9;
  padding: 0.6rem;
  border-radius: 50%;
  min-width: 50px;
  text-align: center;
  flex-shrink: 0;
}

.contact-details h4 {
  color: #2e7d32;
  margin-bottom: 0.3rem;
  font-size: 1rem;
}

.contact-details p {
  color: #666;
  margin: 0.2rem 0;
  line-height: 1.4;
  font-size: 0.9rem;
}

/* 地图样式 */
.static-map {
  background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
  height: 280px;
  border-radius: 10px;
  border: 2px solid #4caf50;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  flex: 1;
}

.static-map:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(76, 175, 80, 0.3);
  border-color: #2e7d32;
}

.map-image-placeholder {
  text-align: center;
  padding: 2rem;
}

.map-preview .map-icon {
  font-size: 3rem;
  margin-bottom: 0.8rem;
}

.map-preview h4 {
  color: #2e7d32;
  margin-bottom: 0.4rem;
  font-size: 1.1rem;
}

.map-preview p {
  color: #666;
  margin-bottom: 0.8rem;
  line-height: 1.4;
  font-size: 0.9rem;
}

.map-preview .click-hint {
  background: #2e7d32;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  display: inline-block;
  transition: all 0.3s ease;
}

.static-map:hover .click-hint {
  background: #1b5e20;
  transform: scale(1.05);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .contact-card, .map-card {
    min-height: auto;
    padding: 1.5rem;
  }
  
  .static-map {
    height: 250px;
  }
}

/* 百度地图容器样式 */
.baidu-map {
  height: 300px;
  border-radius: 10px;
  border: 2px solid #4caf50;
  overflow: hidden;
  margin-bottom: 1rem;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .baidu-map {
    height: 250px;
  }
}

/* 地图操作按钮样式 */
.map-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.map-btn {
  padding: 12px 24px;
  background: linear-gradient(135deg, #4caf50, #2e7d32);
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  font-weight: 600;
  flex: 1;
  min-width: 140px;
  text-decoration: none;
  display: inline-block;
  text-align: center;
}

.map-btn:hover {
  background: linear-gradient(135deg, #43a047, #1b5e20);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(76, 175, 80, 0.3);
}

/* 调试按钮的特殊样式 */
.map-btn[style*="background: #ff9800"] {
  background: linear-gradient(135deg, #ff9800, #f57c00) !important;
}

.map-btn[style*="background: #ff9800"]:hover {
  background: linear-gradient(135deg, #f57c00, #e65100) !important;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .map-actions {
    flex-direction: column;
  }
  
  .map-btn {
    width: 100%;
  }
}

/* 页脚样式 */
.footer {
  background: linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%);
  color: white;
  padding: 3rem 0 1rem;
}

.copyright {
  text-align: center;
  color: #a5d6a7;
}

.copyright p {
  margin: 0.5rem 0;
  font-size: 0.9rem;
}

/* 响应式设计 */
@media (max-width: 968px) {
  .carousel-container {
    padding: 0 50px;
  }
  
  .carousel-btn {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
  
  .product-card {
    width: 300px;
    min-height: 400px;
  }
  
  .product-image {
    height: 200px;
  }
  
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .carousel-container {
    padding: 0 40px;
  }
  
  .carousel-track {
    gap: 1.5rem;
  }
  
  .carousel-slide:not(.active) {
    transform: scale(0.85);
    opacity: 0.6;
    filter: blur(1px);
    cursor: default;
    pointer-events: none; /* 阻止所有点击事件 */
  }
  
  .product-card {
    width: 280px;
    min-height: 380px;
  }
  
  .product-info {
    padding: 1.5rem;
  }
  
  .product-name {
    font-size: 1.3rem;
  }
  
  .contact-card,
  .certificates-card {
    padding: 1.5rem;
  }
  
  .logo-main {
    padding: 0.5rem 1rem;
    gap: 1rem;
  }
  
  .logo-wrapper {
    width: 50px;
    height: 50px;
  }
  
  .company-name {
    font-size: 1.2rem;
  }
  
  .map-actions {
    flex-direction: column;
  }
  
  .map-btn {
    width: 100%;
  }
  
}

@media (max-width: 480px) {
  .carousel-container {
    padding: 0 30px;
  }
  
  .carousel-btn {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
  
  .product-card {
    width: 250px;
    min-height: 350px;
  }
  
  .product-image {
    height: 180px;
  }
  
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .hero-content p {
    font-size: 1.1rem;
  }
}
</style>