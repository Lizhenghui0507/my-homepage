<template>
  <div v-if="show" class="image-gallery-overlay" @click="closeGallery">
    <div class="gallery-container" @click.stop>
      <!-- 关闭按钮 -->
      <button class="close-btn" @click="closeGallery">×</button>
      
      <!-- 主图展示 -->
      <div class="main-image-container">
        <img :src="currentImage.src" :alt="currentImage.alt" class="main-gallery-image">
        <div class="image-caption">{{ currentImage.title }}</div>
      </div>
      
      <!-- 缩略图导航 -->
      <div class="thumbnail-container">
        <div 
          v-for="(image, index) in images" 
          :key="index"
          class="thumbnail-item"
          :class="{ active: currentIndex === index }"
          @click="setCurrentImage(index)"
        >
          <img :src="image.src" :alt="image.alt" class="thumbnail-image">
        </div>
      </div>
      
      <!-- 导航按钮 -->
      <button class="nav-btn prev-btn" @click="prevImage">‹</button>
      <button class="nav-btn next-btn" @click="nextImage">›</button>
      
      <!-- 图片计数器 -->
      <div class="image-counter">{{ currentIndex + 1 }} / {{ images.length }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageGallery',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    images: {
      type: Array,
      default: () => []
    },
    initialIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentIndex: this.initialIndex
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex] || {}
    }
  },
  watch: {
    initialIndex(newIndex) {
      this.currentIndex = newIndex
    }
  },
  methods: {
    closeGallery() {
      this.$emit('close')
    },
    setCurrentImage(index) {
      this.currentIndex = index
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length
    },
    prevImage() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length
    },
    handleKeydown(event) {
      if (!this.show) return
      
      switch(event.key) {
        case 'Escape':
          this.closeGallery()
          break
        case 'ArrowLeft':
          this.prevImage()
          break
        case 'ArrowRight':
          this.nextImage()
          break
      }
    }
  },
  mounted() {
    document.addEventListener('keydown', this.handleKeydown)
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleKeydown)
  }
}
</script>

<style scoped>
.image-gallery-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  animation: fadeIn 0.3s ease;
}

.gallery-container {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: rgba(0, 0, 0, 0.9);
  transform: scale(1.1);
}

.main-image-container {
  text-align: center;
  padding: 20px;
  background: #f8f9fa;
}

.main-gallery-image {
  max-width: 100%;
  max-height: 60vh;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.image-caption {
  margin-top: 15px;
  font-size: 1.2rem;
  color: #2e7d32;
  font-weight: 600;
}

.thumbnail-container {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  background: white;
  border-top: 1px solid #e0e0e0;
  overflow-x: auto;
}

.thumbnail-item {
  width: 80px;
  height: 60px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  border: 3px solid transparent;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.thumbnail-item.active {
  border-color: #4caf50;
  transform: scale(1.1);
}

.thumbnail-item:hover {
  border-color: #2e7d32;
}

.thumbnail-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-btn:hover {
  background: rgba(0, 0, 0, 0.9);
  transform: translateY(-50%) scale(1.1);
}

.prev-btn {
  left: 20px;
}

.next-btn {
  right: 20px;
}

.image-counter {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .gallery-container {
    max-width: 95%;
    max-height: 95%;
  }
  
  .thumbnail-item {
    width: 60px;
    height: 45px;
  }
  
  .nav-btn {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
  
  .main-gallery-image {
    max-height: 50vh;
  }
}
</style>