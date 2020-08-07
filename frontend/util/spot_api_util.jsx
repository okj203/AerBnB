export const createSpot = (spot) =>
  $.ajax({
    method: "post",
    url: "/api/spots",
    data: { spot },
  });

export const updateSpot = (spot) =>
  $.ajax({
    method: "patch",
    url: `/api/spots/${spot.id}`,
    data: { spot },
  });

export const fetchSpot = (spotId) =>
  $.ajax({
    method: "GET",
    url: `/api/spots/${spotId}`,
  });

export const fetchSpots = () => {
  return $.ajax({
    method: "GET",
    url: "/api/spots",
  });
};

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

// export const fetchSearch = (query) => (
//     $.ajax({
//         method: 'GET',
//         url: "/api/search"
//     })
// )
