let services = document.querySelectorAll('.service-wrapper')

services.forEach((service) => {
  // ホバー時のアニメーション
  service.addEventListener('mouseenter', (event) => {
    anime.remove(service.querySelector('.arrow')) // 背景のアニメーションを削除する
    anime.remove(service.querySelector('.arrow-small')) // 小さい背景のアニメーションを削除する

    // 背景のアニメーション
    anime({
      targets: service.querySelector('.arrow'),
      easing: 'easeOutExpo',
      scale: 30,
    })

    // 小さい背景のアニメーション
    anime({
      targets: service.querySelector('.arrow-small'),
      easing: 'easeOutExpo',
      scale: 7,
      duration: 1300,
    })

    // アローアニメーション
    anime.timeline()
      .add({
        targets: service.querySelector('i'),
        translateX: -25,
        translateY: 25,
        easing: 'easeOutExpo',
        duration: 400,
      })
      .add({
        targets: service.querySelector('i'),
        translateX: 0,
        translateY: 0,
        easing: 'easeOutExpo',
        duration: 1700,
        offset: 100,
      })
  })

  // ホバー解除時のアニメーション
  service.addEventListener('mouseleave', (event) => {
    anime.remove(service.querySelector('.arrow')) // 背景のアニメーションを削除する
    anime.remove(service.querySelector('.arrow-small')) // 小さい背景のアニメーションを削除する

    // 背景のアニメーション
    anime({
      targets: service.querySelector('.arrow'),
      easing: 'easeOutExpo',
      scale: 1,
    })

    // 小さい背景のアニメーション
    anime({
      targets: service.querySelector('.arrow-small'),
      easing: 'easeOutExpo',
      scale: 1,
      duration: 900,
    })

    // アローアニメーション
    anime.timeline()
    .add({
       targets: service.querySelector('i'),
       translateX: -25,
       translateY: 25,
       easing: 'easeOutExpo',
       duration: 400,
    })
    .add({
       targets: service.querySelector('i'),
       translateX: 0,
       translateY: 0,
       easing: 'easeOutExpo',
       duration: 1700,
       offset: 100,
    })
  })
})