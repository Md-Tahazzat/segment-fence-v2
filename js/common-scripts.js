(function ($) {
  $(function () {
    $(".phone-nav").click(function () {
      $("body").toggleClass("navShown");
      $(".nav-wrap").fadeToggle();
    });

    document.addEventListener("scroll", function () {
      var scrolledHeight = window.scrollY;
      var parallax = document.querySelector(".parallax");
      var limit = parallax.offsetTop + parallax.offsetHeight;
      if (scrolledHeight > parallax.offsetTop && scrolledHeight <= limit) {
        parallax.style.transform =
          "translateY(" + (scrolledHeight - parallax.offsetTop) * 0.5 + "px)";
      } else {
        parallax.style.transform = "translateY(0)";
      }
    });

    var header = new Headroom(document.querySelector("header"), {
      tolarence: 80,
      offset: 55,
      classes: {
        initial: "headroom",
        pinned: "slidedown",
        unpinned: "slideup",
        top: "headroom--top",
        notTop: "headroom--not-top",
        bottom: "headroom--bottom",
        notBottom: "headroom--not-bottom",
        frozen: "headroom--frozen",
      },
    });
    header.init();

    //FAQs Accordion Function
    $(".accordion-item").each(function () {
      var $this = $(this);
      $this.find(" > h5").on("click touch", function () {
        $(".accordion-item").removeClass("active");
        $(".accordion-item .accordion-content").slideUp();
        if ($this.find(".accordion-content:visible").length) {
          $(".accordion-item").removeClass("active");
          $(".accordion-item .accordion-content").slideUp();
        } else {
          $this.addClass("active");
          $(".accordion-item .accordion-content").slideUp();
          $this.find(" > .accordion-content").slideDown();
        }
      });
    });

    if ($(".project-slider").length) {
      $(".project-slider").slick({
        autoplay: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: true,

        responsive: [
          {
            breakpoint: 768,
            settings: {
              autoplay: true,
              slidesToShow: 1,
              dots: false,
              arrows: false,
            },
          },
        ],
      });
      $(window).on("resize", function () {
        $(".project-slider").slick("resize");
      });
    }

    // handle form input change and focus
    $(".form-input").on("focus", function (e) {
      const input = e.target;
      const labelId = input.getAttribute("data-label");
      $(labelId).css("opacity", "0");
    });

    $(".form-input").on("blur", function (e) {
      const input = e.target;
      const val = e.target.value;
      if (val === "") {
        const labelId = input.getAttribute("data-label");
        $(labelId).css("opacity", "1");
      }
    });

    // initialzie the slider for our work large images
    if ($(".project-slider-large").length) {
      $(".project-slider-large").slick({
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: true,

        responsive: [
          {
            breakpoint: 768,
            settings: {
              autoplay: true,
              slidesToShow: 1,
              dots: false,
              arrows: false,
            },
          },
        ],
      });

      let device = "large";
      $(window).on("resize", function () {
        if (window.innerWidth > 1024) {
          // $("body").toggleClass("navShown");
          $(".nav-wrap").css("display", "block");
          device = "large";
        } else {
          if (device === "large") {
            device = "small";
            console.log("small device");
            $(".nav-wrap").css("display", "none");
            $("body").removeClass("navShown");
          }
        }

        $(".project-slider-large").slick("resize");
      });
    }

    // if ($(".inodeck-item-slider").length) {
    //   $(".inodeck-item-slider").slick({
    //     autoplay: false,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     dots: true,
    //     infinite: true,
    //   });
    //   $(window).on("resize", function () {
    //     $(".inodeck-item-slider").slick("resize");
    //   });
    // }

    // Content animation in-view

    var $window = $(window);

    // FadeIn from bottom animation
    var $animation_elements1 = $(".fadeIn-from-bottom");

    function check_if_in_view1() {
      var window_height1 = $window.height() / 1.15;
      var insetAmount1 = window_height1 / 10; // fifth of the screen
      var window_top_position1 = $window.scrollTop();
      var window_bottom_position1 =
        window_top_position1 + window_height1 - insetAmount1;

      $.each($animation_elements1, function () {
        var $element1 = $(this);
        var element_height1 = $element1.outerHeight();
        var element_top_position1 = $element1.offset().top;
        var element_bottom_position1 = element_top_position1 + element_height1;

        // Check to see if this current container is within viewport
        if (element_top_position1 <= window_bottom_position1) {
          $element1.addClass("is-visible");
        }
      });
    }

    $window.on("scroll orientationchange resize", check_if_in_view1);
    $window.trigger("scroll");

    // Split heading animation

    // Tab
    $(".tab-wrap .tab-items").hide();
    $(".tab-wrap .tab-items:first").show();
    $(".tabs-nav li:first").addClass("tab-active");

    // Change tab class and display content
    $(".tabs-nav a").on("click", function (event) {
      event.preventDefault();
      $(".tabs-nav li").removeClass("tab-active");
      $(this).parent().addClass("tab-active");
      $(".tab-wrap .tab-items").hide();
      $($(this).attr("href")).show();
    });

    if ($(".inodeck-item-slider").length) {
      $(".inodeck-item-slider").slick({
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: true,
      });
      $(window).on("resize", function () {
        $(".inodeck-item-slider").slick("resize");
      });
    }

    // Initialize Magnific Popup with gallery mode
    $(".inodeck-item-slider").magnificPopup({
      delegate: "a.lightbox", // the selector for gallery item
      type: "image",
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1], // preload previous and next images
      },
    });
  }); //end ready funtion

  document.querySelectorAll(".mai-mult").forEach((button) => {
    button.addEventListener("click", function () {
      var itemDetails = this.closest(".inodeck-item-details");
      var readMoreText = itemDetails.querySelector(".read-more-text");
      var moreContent = itemDetails.querySelector(".more-content");

      if (
        moreContent.style.display === "none" ||
        moreContent.style.display === ""
      ) {
        readMoreText.style.display = "none";
        moreContent.style.display = "inline";
      } else {
        readMoreText.style.display = "block";
        moreContent.style.display = "none";
      }
    });
  });

  // Handle form submission
  function hideContactFormSubmissionResult() {
    let timoutId = setTimeout(() => {
      $("#form_results").html("");
      clearTimeout(timoutId);
    }, 5000);
  }

  function hideFooterFormSubmissionResult() {
    let timoutId = setTimeout(() => {
      $("#footer-form-results").html("");
      clearTimeout(timoutId);
    }, 5000);
  }

  function showInputLabels() {
    $("#numele-lebel").css("opacity", "1");
    $("#number-label").css("opacity", "1");
    $("#email-label").css("opacity", "1");
  }

  $("#contact_form").on("submit", function (e) {
    e.preventDefault();
    $("#form_spinner").show();
    $("#form_submit_wrapper").hide();

    $.ajax({
      type: "POST",
      url: "process.php",
      data: $(this).serialize(),
      success: function (response) {
        $("#form_results").html(response);
        hideContactFormSubmissionResult();
        $(this).find("input:not([type='submit'])").val("");
        showInputLabels();
        $("#form_spinner").hide();
        $("#form_submit_wrapper").show();
      }.bind(this),
      error: function (e) {
        $("#form_results").html(e);
        hideContactFormSubmissionResult();
        $("#form_spinner").hide();
        $("#form_submit_wrapper").show();
      },
    });
  });

  // handle news letter footer form submit
  $("#footer-input-form").on("submit", function (e) {
    e.preventDefault();
    $(".footer-form-spinner").show();
    $("#footer-input-submit-btn").hide();
    $.ajax({
      type: "POST",
      url: "process.php",
      data: $(this).serialize(),
      success: function (response) {
        $("#footer-form-results").html(response);
        hideFooterFormSubmissionResult();
        $(this).find("input[type='email']").val("");
        $("#footer-email-label").css("opacity", "1");
        $(".footer-form-spinner").hide();
        $("#footer-input-submit-btn").show();
      }.bind(this),
      error: function (e) {
        $("#footer-form-results").html(e);
        hideFooterFormSubmissionResult();
        $("#footer-email-label").css("opacity", "1");
        $(".footer-form-spinner").hide();
        $("#footer-input-submit-btn").show();
      },
    });
  });
})(jQuery);
