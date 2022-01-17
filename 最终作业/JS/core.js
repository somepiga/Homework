window.addEventListener('load', function () {
    // 左右箭头
    var arrow_l = document.querySelector('.arrow_l');
    var arrow_r = document.querySelector('.arrow_r');
    var right = document.querySelector('.right');
    var rightWidth = right.offsetWidth;

    right.addEventListener('mouseenter', function () {
        arrow_l.style.display = 'block'
        arrow_r.style.display = 'block'
    })
    right.addEventListener('mouseleave', function () {
        arrow_l.style.display = 'none'
        arrow_r.style.display = 'none'
    })

    // 根据图片个数生成小圆点
    var ul = right.querySelector('.photo')
    var ul1 = right.querySelector('.promo-nav')
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li')
        li.setAttribute('index', i)
        ul1.appendChild(li)
        li.addEventListener('click', function () {
            for (var i = 0; i < ul1.children.length; i++) {
                ul1.children[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            // console.log(rightWidth);
            num = index;
            circle = index;
            animate(ul, -index * rightWidth);
        })
    }
    ul1.children[0].className = 'current'
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var num = 0;
    var circle = 0;
    // 右侧箭头点击
    arrow_r.addEventListener('click', function () {
        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul, -num * rightWidth);
        circle++;
        if (circle == ul1.children.length) {
            circle = 0;
        }
        for (var i = 0; i < ul1.children.length; i++) {
            ul1.children[i].className = '';
        }
        ul1.children[circle].className = 'current';
    })

    // 左侧箭头点击
    arrow_l.addEventListener('click', function () {
        if (num == 0) {
            ul.style.left = -(ul.children.length - 1) * rightWidth + 'px';
            num = ul.children.length - 1;
        }
        num--;
        animate(ul, -num * rightWidth);
        circle--;
        if (circle < 0) {
            circle = ul1.children.length - 1;
        }
        for (var i = 0; i < ul1.children.length; i++) {
            ul1.children[i].className = '';
        }
        ul1.children[circle].className = 'current';
    })

})