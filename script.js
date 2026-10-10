// =====================================================
// 2026 RELEASES — UPDATED POSTERS
// =====================================================

const titles = [
  // =========================
  // ORIGINAL TITLES
  // =========================

  {
    title: "Avengers: Doomsday",
    type: "Movie",
    year: "2026",
    rating: "8.9",
    image: "https://kimi-web-img.kimi.ai/img/m.media-amazon.com/e79cd769f4aa8137460dffd5020e8d9ed5634e03.jpg"
  },

  {
    title: "Stranger Things 5",
    type: "Series",
    year: "2026",
    rating: "9.1",
    image: "https://kimi-web-img.kimi.ai/img/shopuniversal.com/39331923f753512627fa8a28fff31b12c5361790.jpg"
  },

  {
    title: "The Odyssey",
    type: "Movie",
    year: "2026",
    rating: "8.8",
    image: "https://kimi-web-img.kimi.ai/img/www.impawards.com/0eba94347ee4068b50687113fa2b8817fbe879e5.jpg"
  },

  {
    title: "The Boys: Final Season",
    type: "Series",
    year: "2026",
    rating: "8.9",
    image: "https://kimi-web-img.kimi.ai/img/image.pmgstatic.com/e8529a661ad2a6c116618cedc87bc5e5b3f99c0d.jpg"
  },

  {
    title: "Supergirl",
    type: "Movie",
    year: "2026",
    rating: "8.4",
    image: "https://kimi-web-img.kimi.ai/img/shop.dc.com/0fad58490f8ed1ce0f9cc91485e2268de7596684.jpg"
  },

  {
    title: "I Will Find You",
    type: "Series",
    year: "2026",
    rating: "8.1",
    image: "https://kimi-web-img.kimi.ai/img/m.media-amazon.com/1af948e519e678973b33dc4083c99859e645aa89.jpg"
  },

  {
    title: "Toy Story 5",
    type: "Movie",
    year: "2026",
    rating: "8.6",
    image: "https://kimi-web-img.kimi.ai/img/www.cinematerial.com/2d0202a9771e26c174a86835fe6e941f55b74dda.jpg"
  },

  {
    title: "House of the Dragon: Season 3",
    type: "Series",
    year: "2026",
    rating: "8.8",
    image: "https://kimi-web-img.kimi.ai/img/m.media-amazon.com/e4572e8d3241d75c639985ea7b041c54b3a9e672.jpg"
  },


  // =========================
  // EXTRA MOVIES
  // =========================

  {
    title: "Scary Movie",
    type: "Movie",
    year: "2026",
    rating: "7.9",
    image: "https://kimi-web-img.kimi.ai/img/image.tmdb.org/dcdd249d63232fbfe62ad71eedef2a08a963a71b.jpg"
  },

  {
    title: "The Mandalorian and Grogu",
    type: "Movie",
    year: "2026",
    rating: "8.5",
    image: "https://kimi-web-img.kimi.ai/img/i.ebayimg.com/1eaee5e7f15c0a2960a91967a91452fd16d39784.JPG"
  },


  // =========================
  // EXTRA SERIES
  // =========================

  {
    title: "Euphoria: Season 3",
    type: "Series",
    year: "2026",
    rating: "8.4",
    image: "https://kimi-web-img.kimi.ai/img/images.fineartamerica.com/344d640e36780c7b377089e5a11827e91a2b72fe.jpg"
  },

  {
    title: "Below",
    type: "Series",
    year: "2026",
    rating: "8.0",
    image: "https://kimi-web-img.kimi.ai/img/m.media-amazon.com/1e95b95d0a6645e7aa5c0d1a9368957cc7291fc2.jpg"
  }
];


// =====================================================
// CARD TEMPLATE
// =====================================================

const card = item => `
  <article class="card">

    <figure class="poster">
      <img
        src="${item.image}"
        alt="${item.title} poster"
        loading="lazy"
      >

      <button
        class="play"
        data-play="${item.title}"
        aria-label="Play ${item.title}"
      >
        ▶
      </button>
    </figure>

    <div class="card-info">
      <h3>${item.title}</h3>

      <small>
        ${item.year} • ${item.type}
        <span>★ ${item.rating}</span>
      </small>
    </div>

  </article>
`;


// =====================================================
// RENDER FUNCTION
// =====================================================

const render = (id, list) => {
  const element = document.getElementById(id);

  if (element) {
    element.innerHTML = list.map(card).join("");
  }
};


// =====================================================
// THREE MAIN SECTIONS
// EXACTLY 6 CARDS EACH
// =====================================================

// Trending Now
render(
  "trendingGrid",
  titles.slice(0, 6)
);

// Popular Movies
render(
  "moviesGrid",
  titles
    .filter(item => item.type === "Movie")
    .slice(0, 6)
);

// Series You'll Love
render(
  "seriesGrid",
  titles
    .filter(item => item.type === "Series")
    .slice(0, 6)
);


// =====================================================
// MODALS
// =====================================================

const searchModal = document.getElementById("searchModal");
const playerModal = document.getElementById("playerModal");
const searchInput = document.getElementById("search");
const results = document.getElementById("results");


// Open modal
function openModal(modal) {
  if (!modal) return;

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
}


// Close modal
function closeModal(modal) {
  if (!modal) return;

  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
}


// Open player
function openPlayer(title) {
  const playerTitle = document.getElementById("playerTitle");
  const playerScreen = document.getElementById("playerScreen");

  if (playerTitle) {
    playerTitle.textContent = title;
  }

  // Use the clicked title's poster as the player screen backdrop
  const item = titles.find(t => t.title === title);

  if (playerScreen) {
    const poster = item
      ? item.image
      : "https://kimi-web-img.kimi.ai/img/m.media-amazon.com/e79cd769f4aa8137460dffd5020e8d9ed5634e03.jpg";

    playerScreen.style.setProperty(
      "--preview-bg",
      `url("${poster}")`
    );
  }

  openModal(playerModal);
}


// =====================================================
// SEARCH BUTTON
// =====================================================

const openSearch = document.getElementById("openSearch");

if (openSearch) {
  openSearch.addEventListener("click", () => {
    openModal(searchModal);

    if (searchInput) {
      searchInput.focus();
    }
  });
}


// =====================================================
// CLOSE MODAL BUTTONS
// =====================================================

document.querySelectorAll("[data-close]").forEach(button => {
  button.addEventListener("click", () => {
    const modal = document.getElementById(button.dataset.close);

    closeModal(modal);
  });
});


// =====================================================
// PLAY BUTTONS
// =====================================================

document.addEventListener("click", event => {
  const play = event.target.closest("[data-play]");

  if (play) {
    openPlayer(play.dataset.play);
  }
});


// =====================================================
// SEARCH
// =====================================================

if (searchInput) {
  searchInput.addEventListener("input", () => {

    const query = searchInput.value
      .trim()
      .toLowerCase();

    const found = titles.filter(item =>
      item.title.toLowerCase().includes(query)
    );

    if (!query) {
      results.innerHTML = "";
      return;
    }

    if (found.length) {

      results.innerHTML = found
        .map(item => `
          <button
            class="result"
            data-play="${item.title}"
          >
            ${item.title} — ${item.type}
          </button>
        `)
        .join("");

    } else {

      results.innerHTML = `
        <p class="result">
          No titles found.
        </p>
      `;

    }
  });
}


// =====================================================
// CLOSE MODAL WHEN CLICKING OUTSIDE
// =====================================================

document.querySelectorAll(".modal").forEach(modal => {

  modal.addEventListener("click", event => {

    if (event.target === modal) {
      closeModal(modal);
    }

  });

});


// =====================================================
// ESCAPE KEY
// =====================================================

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {

    closeModal(searchModal);
    closeModal(playerModal);

  }

});


// =====================================================
// MOBILE MENU
// =====================================================

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

  menuToggle.addEventListener("click", () => {

    const open = mainNav.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      open
    );

    menuToggle.textContent = open
      ? "×"
      : "☰";

  });


  mainNav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      mainNav.classList.remove("open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      menuToggle.textContent = "☰";

    });

  });

}


// =====================================================
// SHOW ALL BUTTON
// KEEP TRENDING AT 6 CARDS
// =====================================================

const showAll = document.getElementById("showAll");

if (showAll) {

  showAll.addEventListener("click", () => {

    render(
      "trendingGrid",
      titles.slice(0, 6)
    );

    showAll.textContent = "Showing 6 titles";

  });

}


// =====================================================
// ADD TO WATCHLIST
// =====================================================

const addWatch = document.getElementById("addWatch");

if (addWatch) {

  addWatch.addEventListener("click", () => {

    alert(
      "Avengers: Doomsday was added to My List."
    );

  });

}


// =====================================================
// ACCOUNT BUTTON
// =====================================================

const accountButton =
  document.getElementById("accountButton");

if (accountButton) {

  accountButton.addEventListener("click", () => {

    const account =
      document.getElementById("account");

    if (account) {

      account.scrollIntoView({
        behavior: "smooth"
      });

    }

  });

}


// =====================================================
// CREATE ACCOUNT
// =====================================================

const createAccount =
  document.getElementById("createAccount");

if (createAccount) {

  createAccount.addEventListener("click", () => {

    alert(
      "Prototype: account creation flow is ready for expansion."
    );

  });

}


// =====================================================
// FEEDBACK FORM
// =====================================================

const feedbackForm =
  document.getElementById("feedbackForm");

if (feedbackForm) {

  feedbackForm.addEventListener("submit", event => {

    event.preventDefault();

    const formStatus =
      document.getElementById("formStatus");

    if (formStatus) {

      formStatus.textContent =
        "Thanks! Your prototype feedback was submitted.";

    }

    feedbackForm.reset();

  });

}

function arrangeFeaturedSections() {
  const details = document.querySelector(".details");
  const videoSection = document.querySelector(".video-section");

  if (!details || !videoSection) return;

  if (document.querySelector(".compact-feature-grid")) return;

  const wrapper = document.createElement("div");
  wrapper.className = "compact-feature-grid";

  details.parentNode.insertBefore(wrapper, details);

  wrapper.appendChild(details);
  wrapper.appendChild(videoSection);
}

arrangeFeaturedSections();