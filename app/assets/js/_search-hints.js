(function (window, $) {
  const wycd = window.wycd || {};
  const searchHints = wycd.searchHints = {
    // don't forget to update the static html hint in views/searches/_form.html.erb!
    examples: [
      'Retail',
      'Cook',
      'Administration',
      'Driving',
      'Sales',
      'Nurse',
      'School',
      'Communication',
      'Airport',
    ],
    intervalIDs: [],
  };

  function incrementOrReset(index, length) {
    return (index + 1) % length;
  }

  function rotateHintText(element) {
    let index = 0;
    const $element = $(element);
    const updateHintText = function () {
      index = incrementOrReset(index, searchHints.examples.length);
      $element.fadeOut(300, () =>
        $element
          .text(searchHints.examples[index])
          .fadeIn(300)
      );
    };
    searchHints.intervalIDs.push(setInterval(updateHintText, 5000));
  }

  $('label[for=query] .form-hint .example').each(function () {
    rotateHintText(this);
  });
}(this, $));
