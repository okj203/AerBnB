json.review do
    # The following will render the file 
    # views/reviews/_review.json.jbuilder, 
    # and set a local variable reviews with all this spot's reviews 
    # which you can use inside the partial.
    json.partial! '/api/reviews/review', review: @review
end

json.author do 
    json.partial! '/api/users/user', user: @review.author
end