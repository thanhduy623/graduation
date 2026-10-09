<template>
  <div class="notes-container">
    <!-- Header: Tiêu đề & Nút gọi / định vị nhanh -->
    <div class="notes-header">
      <h3 class="notes-title">Những điều lưu ý</h3>
      <div class="action-buttons">
        <a href="tel:0834828525" class="action-btn">
          <!-- Dòng 1: Icon -->
          <svg
            class="btn-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
            />
          </svg>
          <!-- Dòng 2: Title -->
          <span class="btn-title">Gọi ngay</span>
          <!-- Dòng 3: Description -->
          <span class="btn-desc">SĐT: 0834828525</span>
        </a>

        <a href="#location" class="action-btn">
          <!-- Dòng 1: Icon -->
          <svg
            class="btn-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <!-- Dòng 2: Title -->
          <span class="btn-title">Định vị</span>
          <!-- Dòng 3: Description -->
          <span class="btn-desc">Trường ĐH Tôn Đức Thắng</span>
        </a>
      </div>
    </div>

    <!-- Danh sách lưu ý tối giản dạng dòng kẻ tinh tế -->
    <div class="notes-list">
      <!-- 1. Địa điểm gặp mặt -->
      <div class="note-item">
        <div class="note-bullet"></div>
        <div class="note-content">
          <h4 class="note-heading">Địa điểm gặp mặt</h4>
          <p class="note-desc">
            Địa điểm có thể thay đổi tùy theo tình hình thực tế, mình sẽ cập nhật thông tin thường
            xuyên nhé.
          </p>
        </div>
      </div>

      <!-- 2. Thời tiết -->
      <div class="note-item">
        <div class="note-bullet"></div>
        <div class="note-content">
          <h4 class="note-heading">Thời tiết dự kiến</h4>
          <p class="note-desc">
            Dự báo thời tiết có lúc mưa xen kẽ nắng gắt, nhớ chuẩn bị sẵn ô, dù, quạt cầm tay và
            nước uống đầy đủ.
          </p>
        </div>
      </div>

      <!-- 4. Cách xác định vị trí -->
      <div class="note-item">
        <div class="note-bullet"></div>
        <div class="note-content">
          <h4 class="note-heading">Cách xác định vị trí</h4>
          <p class="note-desc">
            Khi vào cổng, để ý số hiệu cổng được ghi phía trên. Nếu cần hỗ trợ, cứ hỏi các chú bảo
            vệ hoặc bạn tình nguyện viên áo xanh để được chỉ đường cụ thể. Hoặc gọi ngay đến mình
            nha!
          </p>
        </div>
      </div>

      <!-- 3. Phương tiện di chuyển -->
      <div class="note-item">
        <div class="note-bullet"></div>
        <div class="note-content">
          <h4 class="note-heading">Phương tiện di chuyển</h4>
          <p class="note-desc mb-3">Khuyến khích đi xe công nghệ thay vì xe cá nhân:</p>

          <div class="transport-grid">
            <div class="transport-row">
              <span class="transport-label">Xe máy cá nhân</span>
              <span class="transport-val">Cổng 7, 9</span>
            </div>
            <div class="transport-row">
              <span class="transport-label">Xe máy công nghệ</span>
              <span class="transport-val">Cổng 1, 2, 5</span>
            </div>
            <div class="transport-row">
              <span class="transport-label">Ô tô công nghệ</span>
              <span class="transport-val">Cổng 2, 5</span>
            </div>
            <div class="transport-row transport-row--warning">
              <span class="transport-label">Ô tô cá nhân</span>
              <span class="transport-val">Trường không đảm bảo bãi đậu</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
/* =========================================================
   CONTAINER & HEADER
========================================================= */

.notes-container {
  margin-top: 48px;
  width: 100%;
  max-width: 380px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
}

.notes-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
}

.notes-title {
  margin: 12px 0 0;

  color: var(--color-gold-400);

  font-family: var(--font-signature);
  font-size: 42px;
  font-weight: 400;

  line-height: 42px;
}

/* =========================================================
   ACTION BUTTONS (ĐỒNG NHẤT 100% GIAO DIỆN & BỐ CỤC 3 DÒNG)
========================================================= */

.action-buttons {
  display: flex;
  gap: 12px;
  width: 100%;
}

.action-btn {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px 12px;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s ease;

  /* Phong cách giao diện đồng nhất sang trọng */
  color: var(--color-navy-950, #040814);
  background: linear-gradient(135deg, #f3e5ab 0%, #d4af37 50%, #aa8c2c 100%);
  border: 1px solid rgba(212, 175, 55, 0.4);
  box-shadow: 0 4px 12px rgba(212, 175, 55, 0.15);
}

.action-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(212, 175, 55, 0.3);
}

/* Dòng 1: Icon */
.btn-icon {
  width: 18px;
  height: 18px;
  margin-bottom: 4px;
}

/* Dòng 2: Title */
.btn-title {
  font-family: var(--font-sans, sans-serif);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  line-height: 1.2;
}

/* Dòng 3: Description */
.btn-desc {
  font-family: var(--font-sans, sans-serif);
  font-size: 10px;
  font-weight: 500;
  opacity: 0.85;
  margin-top: 2px;
  line-height: 1.2;
}

/* =========================================================
   NOTES LIST (STYLE TỐI GIẢN - KHÔNG DÙNG CARD THÔ CỨNG)
========================================================= */

.notes-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.note-item {
  position: relative;
  display: flex;
  align-items: justify;
  gap: 12px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.note-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

/* Họa tiết chấm bi/kim cương */
.note-bullet {
  width: 5px;
  height: 5px;
  margin-top: 8px;
  background: var(--color-gold-400, #d4af37);
  transform: rotate(45deg);
  box-shadow: 0 0 6px rgba(212, 175, 55, 0.5);
  flex-shrink: 0;
}

.note-content {
  flex: 1;
}

.note-heading {
  margin: 0 0 4px;
  color: var(--color-gold-light, #f3e5ab);
  font-family: var(--font-serif, serif);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.02em;
}

.note-desc {
  margin: 0;
  color: var(--color-slate-300, #cbd5e1);
  font-family: var(--font-serif, serif);
  font-size: 14px;
  line-height: 1.6;
  font-weight: 400;
}

.mb-3 {
  margin-bottom: 8px;
}

/* =========================================================
   TRANSPORT LIST STYLING (GỌN GÀNG, TINH TẾ)
========================================================= */

.transport-grid {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 8px;
}

.transport-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 10px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 4px;
  border-left: 2px solid rgba(212, 175, 55, 0.3);
}

.transport-row--warning {
  border-left-color: rgba(239, 68, 68, 0.6);
  background: rgba(239, 68, 68, 0.03);
}

.transport-label {
  font-family: var(--font-sans, sans-serif);
  font-size: 12px;
  color: var(--color-slate-300, #cbd5e1);
}

.transport-row--warning .transport-label {
  color: #fca5a5;
}

.transport-val {
  font-family: var(--font-sans, sans-serif);
  font-size: 12px;
  font-weight: 600;
  color: var(--color-gold-300, #e6ca65);
}

.transport-row--warning .transport-val {
  color: #f87171;
  font-weight: 500;
}

/* =========================================================
   MOBILE RESPONSIVE
========================================================= */

@media (max-width: 480px) {
  .notes-container {
    margin-top: 36px;
    padding: 0 12px;
  }

  .notes-header {
    gap: 12px;
    margin-bottom: 20px;
  }

  .action-btn {
    padding: 8px 6px;
  }

  .btn-title {
    font-size: 10px;
  }

  .btn-desc {
    font-size: 9px;
  }

  .note-heading {
    font-size: 15px;
  }

  .note-desc,
  .transport-label,
  .transport-val {
    font-size: 13px;
  }
}
</style>
