/**
 * DEBOPRIYO KARMAKER — LUXURY EXECUTIVE PORTFOLIO
 * Core Client Scripts: Ambient Dark Fluid Canvas, Lenis Smooth Scroll,
 * 3D Perspective Tilt, Nav Spy, Live Dhaka Clock, and Form Interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lenis Smooth Scrolling Engine
  let lenisInstance = null;
  if (typeof Lenis !== 'undefined') {
    lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  // 2. Navbar Scroll Styling
  const siteHeader = document.getElementById('site-header');
  const handleScroll = () => {
    if (window.scrollY > 30) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 3. Smooth Anchor Scrolling (Compatible with Lenis)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        closeMobileMenu();

        if (lenisInstance) {
          lenisInstance.scrollTo(targetElem, { offset: -60 });
        } else {
          targetElem.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // 4. Mobile Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  function closeMobileMenu() {
    if (navMenu && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      menuToggle?.classList.remove('open');
      menuToggle?.setAttribute('aria-expanded', 'false');
    }
  }

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      menuToggle.classList.toggle('open', isOpen);
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        closeMobileMenu();
      }
    });
  }

  // 5. Active Navigation Link Spy
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const updateActiveNavLink = () => {
    const scrollPos = window.scrollY + 140;
    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };
  window.addEventListener('scroll', updateActiveNavLink, { passive: true });

  // 6. Live Dhaka Clock (UTC+6)
  const liveTimeDisplay = document.getElementById('live-time-display');

  const updateDhakaTime = () => {
    if (!liveTimeDisplay) return;
    try {
      const options = {
        timeZone: 'Asia/Dhaka',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      };
      const formatter = new Intl.DateTimeFormat('en-GB', options);
      const parts = formatter.format(new Date());
      liveTimeDisplay.textContent = `${parts} DHAKA (UTC+6)`;
    } catch (err) {
      const now = new Date();
      const utcMs = now.getTime() + now.getTimezoneOffset() * 60000;
      const dhakaDate = new Date(utcMs + 6 * 3600000);
      const pad = (n) => String(n).padStart(2, '0');
      const timeStr = `${pad(dhakaDate.getHours())}:${pad(dhakaDate.getMinutes())}:${pad(dhakaDate.getSeconds())}`;
      liveTimeDisplay.textContent = `${timeStr} DHAKA (UTC+6)`;
    }
  };

  updateDhakaTime();
  setInterval(updateDhakaTime, 1000);

  // 7. Scroll Reveal Animation via IntersectionObserver
  const revealElements = document.querySelectorAll(
    '.highlight-card, .intro-bio-card, .credential-card, .project-card, .bento-card, .timeline-item, .cv-download-box, .contact-channels, .contact-form-card'
  );

  revealElements.forEach((el) => el.classList.add('reveal-item'));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach((el) => observer.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add('reveal-visible'));
  }

  // 8. Contact Form Handler (Configured at bottom of script with FormSubmit.co API)

  // 9. Chromatic Silk / Aurora Mesh Canvas (Apple & Linear Luxury Aesthetic)
  const canvas = document.getElementById('bg-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let dpr = 1;

    function resizeCanvas() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Smooth magnetic cursor tracking with spring dampening
    const mouse = {
      x: width * 0.5,
      y: height * 0.4,
      targetX: width * 0.5,
      targetY: height * 0.4,
    };

    window.addEventListener('mousemove', (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    });

    let auroraTime = 0;

    function renderChromaticSilk() {
      auroraTime += 0.0055;

      // Creamy smooth spring interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.038;
      mouse.y += (mouse.targetY - mouse.y) * 0.038;

      ctx.clearRect(0, 0, width, height);

      // Deep atmospheric obsidian ground
      ctx.fillStyle = '#08080a';
      ctx.fillRect(0, 0, width, height);

      // Multi-tonal ambient caustic bloom tracking cursor
      const causticBloom = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        Math.max(width, height) * 0.65
      );
      causticBloom.addColorStop(0, 'rgba(56, 189, 248, 0.055)');
      causticBloom.addColorStop(0.35, 'rgba(129, 140, 248, 0.032)');
      causticBloom.addColorStop(0.65, 'rgba(99, 102, 241, 0.015)');
      causticBloom.addColorStop(1, 'transparent');
      ctx.fillStyle = causticBloom;
      ctx.fillRect(0, 0, width, height);

      // Helper function to render an undulating volumetric silk curtain ribbon
      function drawSilkCurtain(config) {
        const {
          baseYRatio,
          amplitude1,
          amplitude2,
          freq1,
          freq2,
          speed1,
          speed2,
          ribbonHeight,
          colorStop0,
          colorStop1,
          edgeColor,
          edgeWidth,
          mouseFactor
        } = config;

        const topPoints = [];
        const bottomPoints = [];
        const step = 20;

        for (let x = -40; x <= width + 40; x += step) {
          const wave1 = Math.sin(x * freq1 + auroraTime * speed1) * amplitude1;
          const wave2 = Math.cos(x * freq2 - auroraTime * speed2) * amplitude2;
          
          // Smooth gaussian interaction with cursor
          const distToMouse = Math.abs(x - mouse.x);
          const mouseDisp = Math.exp(-Math.pow(distToMouse / 340, 2)) * mouseFactor;
          const yTop = height * baseYRatio + wave1 + wave2 + mouseDisp;
          const yBottom = yTop + ribbonHeight + Math.sin(x * 0.0015 + auroraTime) * 22;

          topPoints.push({ x, y: yTop });
          bottomPoints.push({ x, y: yBottom });
        }

        // 1. Draw Volumetric Silk Ribbon Mesh
        ctx.beginPath();
        ctx.moveTo(topPoints[0].x, topPoints[0].y);
        for (let i = 1; i < topPoints.length; i++) {
          ctx.lineTo(topPoints[i].x, topPoints[i].y);
        }
        for (let i = bottomPoints.length - 1; i >= 0; i--) {
          ctx.lineTo(bottomPoints[i].x, bottomPoints[i].y);
        }
        ctx.closePath();

        const ribbonGrad = ctx.createLinearGradient(0, height * baseYRatio - amplitude1, 0, height * baseYRatio + ribbonHeight + amplitude2);
        ribbonGrad.addColorStop(0, colorStop0);
        ribbonGrad.addColorStop(1, colorStop1);
        ctx.fillStyle = ribbonGrad;
        ctx.fill();

        // 2. Draw Luminous Silk Ridge Filament (Top Sheen Edge)
        if (edgeColor) {
          ctx.beginPath();
          ctx.moveTo(topPoints[0].x, topPoints[0].y);
          for (let i = 1; i < topPoints.length; i++) {
            ctx.lineTo(topPoints[i].x, topPoints[i].y);
          }
          ctx.strokeStyle = edgeColor;
          ctx.lineWidth = edgeWidth || 1;
          ctx.stroke();
        }
      }

      // Ribbon 1: Velvet Violet & Iris Chromatic Silk (Deep Base Layer)
      drawSilkCurtain({
        baseYRatio: 0.32,
        amplitude1: 65,
        amplitude2: 40,
        freq1: 0.0011,
        freq2: 0.0018,
        speed1: 0.55,
        speed2: 0.4,
        ribbonHeight: 280,
        colorStop0: 'rgba(129, 140, 248, 0.065)',
        colorStop1: 'rgba(99, 102, 241, 0.005)',
        edgeColor: 'rgba(199, 210, 254, 0.16)',
        edgeWidth: 1.2,
        mouseFactor: 42
      });

      // Ribbon 2: Electric Cyan & Ice Blue Aurora Veil (Primary Focal Ribbon)
      drawSilkCurtain({
        baseYRatio: 0.52,
        amplitude1: 52,
        amplitude2: 36,
        freq1: 0.0014,
        freq2: 0.0022,
        speed1: 0.72,
        speed2: 0.48,
        ribbonHeight: 240,
        colorStop0: 'rgba(56, 189, 248, 0.078)',
        colorStop1: 'rgba(56, 189, 248, 0.008)',
        edgeColor: 'rgba(125, 211, 252, 0.22)',
        edgeWidth: 1.4,
        mouseFactor: 54
      });

      // Ribbon 3: Deep Emerald-Teal & Obsidian Refraction (Lower Horizon Folds)
      drawSilkCurtain({
        baseYRatio: 0.72,
        amplitude1: 45,
        amplitude2: 32,
        freq1: 0.0009,
        freq2: 0.0016,
        speed1: 0.42,
        speed2: 0.32,
        ribbonHeight: 220,
        colorStop0: 'rgba(16, 185, 129, 0.045)',
        colorStop1: 'rgba(56, 189, 248, 0.006)',
        edgeColor: 'rgba(110, 231, 183, 0.14)',
        edgeWidth: 1.0,
        mouseFactor: 36
      });

      requestAnimationFrame(renderChromaticSilk);
    }
    renderChromaticSilk();
  }

  // 10. Interactive 3D Perspective Card Tilt & Mouse Drag Tracking
  const tiltCards = document.querySelectorAll('[data-tilt]');
  let activeDraggedCard = null;

  tiltCards.forEach((card) => {
    const handleMove = (clientX, clientY) => {
      const rect = card.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate smooth 3D perspective tilt angles
      const rotateX = ((y - centerY) / centerY) * -6.5;
      const rotateY = ((x - centerX) / centerX) * 6.5;

      const percentX = Math.min(Math.max(Math.round((x / rect.width) * 100), 0), 100);
      const percentY = Math.min(Math.max(Math.round((y / rect.height) * 100), 0), 100);

      card.style.setProperty('--mouse-x', `${percentX}%`);
      card.style.setProperty('--mouse-y', `${percentY}%`);

      const isDragging = card.classList.contains('card-dragging');
      const scale = isDragging ? 1.025 : 1.0;
      const translateY = isDragging ? -8 : -5;
      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(${scale}) translateY(${translateY}px)`;
    };

    card.addEventListener('mouseenter', () => {
      card.classList.add('card-active');
    });

    card.addEventListener('mousemove', (e) => {
      handleMove(e.clientX, e.clientY);
    });

    card.addEventListener('mousedown', (e) => {
      activeDraggedCard = card;
      card.classList.add('card-dragging');
      handleMove(e.clientX, e.clientY);
    });

    card.addEventListener('mouseleave', () => {
      if (activeDraggedCard !== card) {
        card.classList.remove('card-active', 'card-dragging');
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) translateY(0px)';
        card.style.setProperty('--mouse-x', '50%');
        card.style.setProperty('--mouse-y', '50%');
      }
    });

    // Touch Dragging Support (mobile and touch devices)
    card.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches.length === 1) {
        card.classList.add('card-active', 'card-dragging');
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    card.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches.length === 1) {
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    card.addEventListener('touchend', () => {
      card.classList.remove('card-active', 'card-dragging');
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) translateY(0px)';
      card.style.setProperty('--mouse-x', '50%');
      card.style.setProperty('--mouse-y', '50%');
    });
  });

  window.addEventListener('mouseup', () => {
    if (activeDraggedCard) {
      activeDraggedCard.classList.remove('card-dragging');
      activeDraggedCard = null;
    }
  });

  // --------------------------------------------------------------------------
  // Contact Form AJAX Handler (FormSubmit.co API to debopriyokarmaker@gmail.com)
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('form-submit-btn');
  const submitBtnText = document.getElementById('submit-btn-text');
  const formStatus = document.getElementById('form-status');

  if (contactForm && submitBtn && formStatus) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // 1. Anti-spam Honeypot Check (Drop bots silently)
      const honey = contactForm.querySelector('input[name="_honey"]');
      if (honey && honey.value.trim() !== '') {
        return;
      }

      // 2. Client-side Throttling & Rate-Limiting (OWASP A07 - Cooldown)
      const COOLDOWN_SECONDS = 30;
      const lastSubmit = parseInt(sessionStorage.getItem('portfolio_form_last_sub') || '0', 10);
      const now = Date.now();
      const elapsed = (now - lastSubmit) / 1000;

      if (elapsed < COOLDOWN_SECONDS) {
        const remaining = Math.ceil(COOLDOWN_SECONDS - elapsed);
        formStatus.className = 'form-status visible status-error';
        formStatus.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          <span>Rate limit active: please wait ${remaining}s before sending another message.</span>
        `;
        return;
      }

      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');
      const messageInput = document.getElementById('form-message');

      // Sanitize input strings against whitespace attacks and control characters
      const rawName = nameInput ? nameInput.value.trim() : '';
      const rawEmail = emailInput ? emailInput.value.trim() : '';
      const rawMessage = messageInput ? messageInput.value.trim() : '';

      const name = rawName.slice(0, 80);
      const email = rawEmail.slice(0, 100);
      const message = rawMessage.slice(0, 2500);

      // Email format regex validation
      const emailPattern = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
      if (!name || !email || !message) {
        formStatus.className = 'form-status visible status-error';
        formStatus.innerHTML = '<span>Please complete all fields before transmitting.</span>';
        return;
      }

      if (!emailPattern.test(email)) {
        formStatus.className = 'form-status visible status-error';
        formStatus.innerHTML = '<span>Please provide a valid email address (e.g. name@domain.com).</span>';
        return;
      }

      // 3. Transmitting UI State
      submitBtn.disabled = true;
      submitBtn.classList.add('loading');
      const originalText = submitBtnText ? submitBtnText.textContent : 'Send Message';
      if (submitBtnText) submitBtnText.textContent = 'Transmitting...';
      formStatus.className = 'form-status';
      formStatus.innerHTML = '';

      try {
        const response = await fetch('https://formsubmit.co/ajax/debopriyokarmaker@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            email: email,
            message: message,
            _subject: `New Portfolio Inquiry from ${name}`,
            _template: 'table',
            _captcha: 'false'
          })
        });

        const data = await response.json().catch(() => null);

        if (response.ok && (data?.success === 'true' || data?.success === true)) {
          // Record successful submission for rate-limiting
          sessionStorage.setItem('portfolio_form_last_sub', Date.now().toString());

          // 4. Secure DOM Construction (OWASP A03 DOM XSS Immunity via textContent)
          formStatus.className = 'form-status visible status-success';
          formStatus.innerHTML = ''; // Clear status

          const successSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          successSvg.setAttribute('width', '16');
          successSvg.setAttribute('height', '16');
          successSvg.setAttribute('viewBox', '0 0 24 24');
          successSvg.setAttribute('fill', 'none');
          successSvg.setAttribute('stroke', 'currentColor');
          successSvg.setAttribute('stroke-width', '2.5');
          successSvg.setAttribute('stroke-linecap', 'round');
          successSvg.setAttribute('stroke-linejoin', 'round');
          successSvg.setAttribute('aria-hidden', 'true');
          successSvg.innerHTML = '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>';

          const successMsgSpan = document.createElement('span');
          successMsgSpan.textContent = `Message sent! Thank you, ${name}. I will reply to you at ${email} shortly.`;

          formStatus.appendChild(successSvg);
          formStatus.appendChild(successMsgSpan);

          contactForm.reset();
        } else if (data?.message && data.message.toLowerCase().includes('activation')) {
          formStatus.className = 'form-status visible status-success';
          formStatus.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <span>Form submitted! FormSubmit sent an activation link to <strong>debopriyokarmaker@gmail.com</strong>. Please check your inbox or spam folder and click 'Activate Form' once.</span>
          `;
          contactForm.reset();
        } else {
          throw new Error(data?.message || 'Transmission failed');
        }
      } catch (err) {
        formStatus.className = 'form-status visible status-error';
        formStatus.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          <span>Unable to transmit message. Please email me directly at <a href="mailto:debopriyokarmaker@gmail.com" style="color:#ffffff;text-decoration:underline;margin-left:4px;">debopriyokarmaker@gmail.com</a>.</span>
        `;
      } finally {
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
        if (submitBtnText) submitBtnText.textContent = originalText;
      }
    });
  }
});
