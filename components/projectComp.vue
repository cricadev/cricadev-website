<template lang=""></template>
<script setup>
defineProps({
  title: String,
  img: String,
  content: String,
  square: String,
  content2: String,
});
function openModal(e) {
  const modal = document.querySelectorAll(".modal");
  const target = e.currentTarget.parentElement.previousSibling.innerText;

  modal.forEach((item) => {
    if (item.firstChild.firstChild.data == target) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}
function closeModal(e) {
  const modal = document.querySelectorAll(".modal");
  modal.forEach((item) => {
    item.classList.remove("active");
  });
}
function closeModalOutside(e) {
  const modal = document.querySelectorAll(".modal");
  if (e.currentTarget === e.target) {
    modal.forEach((item) => {
      item.classList.remove("active");
    });
  }
}
</script>
<style lang="scss" scoped>
.project-container:first-of-type {
  margin-top: 20px;
}
.project-container:last-child {
  margin-bottom: 20px !important;
}
.modal-content {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(6, 1fr);
  grid-auto-flow: column;
  place-self: center;
  place-items: center;
  @media (min-width: 1100px) {
    width: 40%;
  }
  @media (max-height: 780px) {
    height: 90%;
  }
  .bg-modal {
    grid-column: 1/2;
    grid-row: 1/4;
    width: 100%;
    height: 100%;
  }
  h2 {
    grid-column: 1/2;
    grid-row: 4/5;
    place-self: center;
    text-align: center;
    width: 100%;
    height: 100%;
    padding-top: 10px;
  }
  .made {
    grid-column: 1/2;
    grid-row: 5/7;
    place-self: center;
  }
  .icons-modal {
    grid-column: 1/2;
    grid-row: 5/7;
    padding-top: 50px;
    @media (min-width: 599px) {
      padding-top: 70px;
    }
  }

  .box-buttons-modal {
    grid-column: 1/2;
    grid-row: 6/7;
    place-self: center;
    padding-top: 40px;

    .btn {
      font-size: 0.52rem !important;
      font-weight: 300;
    }
    a {
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        padding-bottom: 2px;
      }
    }
  }
  p {
    grid-column: 1/2;
    grid-row: 4/6;
    padding-top: 20px;
  }
}

.modal.active {
  opacity: 1;
  pointer-events: all;
  transform: translateY(0%);
  transition: all 0.2s ease-in-out;
}
.modal {
  transition: all 0.5s ease-in-out;

  transform: translateY(100%);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 999;
  opacity: 0;
  pointer-events: none;
}

.project-container {
  flex-grow: 1;
  transition: 0.5s;
  cursor: pointer;
  place-items: center;
  border-radius: 10px;
  overflow: hidden;

  .grad-project {
    grid-column: 1/6;
    grid-row: 2/3;
    background-image: linear-gradient(
      0deg,
      rgb(246, 246, 246) 0%,
      rgb(246, 246, 246) 30%,
      transparent 100%
    );

    height: 100%;
    width: 100%;
    z-index: 2;

    opacity: 0;
    @media (min-width: 1100px) {
      background-image: linear-gradient(
        90deg,
        transparent 0,
        transparent 80%,
        rgb(246, 246, 246) 100%
      );
      grid-column: 3/4;
      grid-row: 1/6;
    }
  }
  .dark-grad-project {
    grid-column: 1/6;
    grid-row: 2/3;
    background-image: linear-gradient(
      0deg,
      rgb(0, 1, 13) 0%,
      rgb(0, 1, 13) 30%,
      transparent 100%
    );

    height: 100%;
    width: 100%;
    z-index: 2;
    opacity: 0;
    @media (min-width: 1100px) {
      background-image: linear-gradient(
        90deg,
        transparent 0,
        transparent 80%,
        rgb(0, 1, 13) 100%
      );
      grid-column: 3/4;
      grid-row: 1/6;
    }
  }
  .bg-hover {
    opacity: 0;
    grid-column: 1/6;
    grid-row: 3/5;

    height: 100%;
    width: 100%;

    z-index: 2;
    @media (min-width: 1100px) {
      grid-column: 4/6;
      grid-row: 1/6;
    }
  }
  .box-buttons {
    grid-column: 1/6;
    grid-row: 4/5;
    opacity: 0;
    @media (min-width: 1100px) {
      grid-column: 1/4;
    }
    .btn {
      font-size: 0.5rem;
      font-weight: 300;

      @media (min-width: 599px) {
        font-size: 0.813rem;
      }
      @media (min-width: 1100px) {
        font-size: 1rem;
      }
    }
  }
  .btn {
    border-radius: 20px;
  }
  .icons {
    opacity: 0;
    grid-column: 5/6;
    grid-row: 3/4;
    place-self: start end;
    padding-top: 10px;
    padding-right: 20px;
    z-index: 3;
    @media (min-width: 1100px) {
      grid-row: 1/4;
      place-self: center end;
    }
  }
  .hover-h2 {
    opacity: 0;
    grid-column: 1/6;
    grid-row: 3/4;
    padding-left: 25px;
    place-self: start;
    z-index: 3;
    @media (min-width: 1100px) {
      grid-column: 4/6;
      grid-row: 1/2;
      place-self: center start;
    }
  }
  .hover-p {
    opacity: 0;
    grid-column: 1/6;
    grid-row: 3/5;
    width: 80%;
    place-self: center start;
    padding-bottom: 20px;
    padding-left: 25px;
    z-index: 3;
    @media (min-width: 1100px) {
      grid-column: 4/6;
      grid-row: 2/5;
    }
    @media (max-height: 850px) and (max-width: 600px) {
      padding-left: 25px;
      padding-top: 10px;
    }
  }

  .bg {
    grid-column: 1/6;
    grid-row: 1/6;
    height: 100%;
    width: 100%;
    background: transparent;
    backdrop-filter: blur(10px) brightness(80%);
    z-index: 2;
  }
  .bg-project {
    grid-column: 1/6;
    grid-row: 1/6;
    height: 100%;
    width: 100%;
    z-index: 1;
    object-fit: cover;
  }
  .no-hover-h2 {
    grid-column: 3/4;
    grid-row: 2/4;
    z-index: 3;
    color: #f6f6f6;
  }
  &:hover {
    box-shadow: 0px 0px 21px 4px rgba(90, 175, 152, 0.6);
    & {
      flex-grow: 6;
      @media (min-width: 1100px) {
        flex-grow: 1;
      }
    }

    .bg {
      opacity: 0;
      transition: opacity 0.2s ease-in;
    }
    .bg-project {
      grid-row: 1/3;
      transition: all 0.2s ease-in-out;
      @media (min-width: 1100px) {
        grid-row: 1/6;
        grid-column: 1/4;
      }
    }
    .no-hover-h2 {
      opacity: 0;
      transition: 0.5s ease-in-out;
    }
    .hover-h2 {
      opacity: 1;
      transition: 0.5s ease-in-out;
    }
    .hover-p {
      opacity: 1;
      transition: 0.5s ease-in-out;
    }
    .icons {
      opacity: 1;
      transition: 0.5s all ease-in-out;
    }
    .box-buttons {
      opacity: 1;
      transition: 0.5s all ease-in-out;
      z-index: 3;
      @media (max-height: 850px) and (max-width: 600px) {
        margin: 0;
        padding-top: 20px;
      }
    }
    .bg-hover {
      opacity: 1;
    }
    .dark-grad-project {
      opacity: 1;
    }
    .grad-project {
      opacity: 1;
    }
  }
}
</style>
