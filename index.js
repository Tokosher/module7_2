let counter = 0;

// throttle scroll
// const onScroll = () => {
//     console.log(counter += 1)
// };
//
// document.addEventListener('scroll', _.throttle(onScroll, 300));

// throttle resize

// const onResize = () => {
//     console.log(counter += 1)
// };
//
// const throttledOnResize = _.throttle(onResize, 300);
//
// window.addEventListener('resize', throttledOnResize);

// input debounce
// const input = document.querySelector('input');
//
// const onInput = () => {
//     console.log(input.value)
// };
//
// input.addEventListener('input', _.debounce(onInput, 500));

// const DELAY_DEBOUNCE = 500;
// const loginInput = document.querySelector('#login');
// const passwordInput = document.querySelector('#password');
//
// const loginInputLength = 8;
// const passwordInputLength = 10;
//
// const loginInputHandler = _.debounce(() => {
//     const currentInputLength = loginInput.value.length;
//
//     loginInput.style.backgroundColor = currentInputLength >= loginInputLength ? 'green' : 'red';
// }, DELAY_DEBOUNCE);
//
// loginInput.addEventListener('input', loginInputHandler)
//
// const passwordInputHandler = _.debounce(() => {
//     const currentInputLength = passwordInput.value.length;
//
//     passwordInput.style.backgroundColor = currentInputLength >= passwordInputLength ? 'green' : 'red';
// }, DELAY_DEBOUNCE)
//
// passwordInput.addEventListener('input', passwordInputHandler)

// Intersection observer

const animatedText = document.querySelector('.animated-text');

const observer = new IntersectionObserver(observerHandler);

observer.observe(animatedText);

function observerHandler (entries) {
    entries.map(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    })
}
