/** Toggle zoom on experience page images */
function zoomImage(img) {
  img.classList.toggle('zoomed');
}

/** Home page PCB navigation highlight */
function initHomeNavigation() {
  const map = document.querySelector('map[name="pcblinks"]');
  const highlight = document.getElementById('hoverHighlight');
  const image = document.querySelector('img.hero-pcb');
  if (!map || !highlight || !image) return;

  map.querySelectorAll('area').forEach((area) => {
    area.addEventListener('mouseenter', () => {
      const coords = area.coords.split(',').map(Number);
      const [x1, y1, x2, y2] = coords;
      const imgRect = image.getBoundingClientRect();
      highlight.style.left = `${imgRect.left + x1}px`;
      highlight.style.top = `${imgRect.top + y1 + window.scrollY}px`;
      highlight.style.width = `${x2 - x1}px`;
      highlight.style.height = `${y2 - y1}px`;
      highlight.style.display = 'block';
    });
    area.addEventListener('mouseleave', () => {
      highlight.style.display = 'none';
    });
  });
}

function showHomeMessage() {
  alert("You're already on the homepage. Try another button?");
  return true;
}

/** Image modal for gallery subpages */
function initImageModal() {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  if (!modal || !modalImg) return;

  document.querySelectorAll('.grid img:not(.thumb)').forEach((img) => {
    img.ondblclick = () => {
      modal.style.display = 'block';
      modalImg.src = img.src;
    };
  });

  window.closeModal = function closeModal() {
    modal.style.display = 'none';
  };
}

/** Video modal for music gallery */
function initMusicModal() {
  const modal = document.getElementById('modal');
  const modalFrame = document.getElementById('modal-frame');
  if (!modal || !modalFrame) return;

  document.querySelectorAll('.grid img.thumb').forEach((img) => {
    img.ondblclick = () => {
      const preview = img.getAttribute('data-preview');
      modal.style.display = 'block';
      modalFrame.src = preview;
    };
  });

  window.closeModal = function closeModal(event) {
    if (!event || event.target === modal) {
      modal.style.display = 'none';
      modalFrame.src = '';
    }
  };
}

/** Travel state pages: dblclick to open full image */
function initTravelGallery() {
  document.querySelectorAll('.grid a').forEach((anchor) => {
    anchor.addEventListener('click', (e) => e.preventDefault());
    anchor.addEventListener('dblclick', () => {
      window.open(anchor.href, '_blank', 'noopener,noreferrer');
    });
  });
}

/** Contact form via Formspree */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('successMessage');
  if (!form || !successMsg) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const honeypot = form.querySelector('input[name="_gotcha"]');
    if (honeypot && honeypot.value) return;

    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { Accept: 'application/json' },
    });

    if (response.ok) {
      form.reset();
      successMsg.style.display = 'block';
    } else {
      alert('There was a problem submitting the form. Please try again.');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initHomeNavigation();
  initImageModal();
  initMusicModal();
  initTravelGallery();
  initContactForm();
});
