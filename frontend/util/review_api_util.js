export const createReview = (review) =>
  $.ajax({
    method: "POST",
    url: "api/reviews",
    data: { review },
  });

export const fetchReviews = (spotId) =>
  $.ajax({
    method: "GET",
    url: "/api/reviews",
    data: { spotId },
  });