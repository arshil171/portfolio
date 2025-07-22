const resumeList = document.querySelectorAll('.resume-list')
const resumeBox = document.querySelectorAll('.resume-box')


resumeList.forEach((list, idx) => {
   list.addEventListener("click", () => {
      document.querySelector(".resume-list.active").classList.remove('active')
      list.classList.add('active')

      document.querySelector(".resume-box.active").classList.remove('active')
      resumeBox[idx].classList.add('active')
   })
})