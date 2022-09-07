# Mum's Deals Challenge

## Instructions

### Development/Local environment

1. Clone this repo
2. `cd into project's dir`
3. Run `yarn install`
4. Change `.env.template` to `.env` and fill in the required ENV VARS.
5. Run `yarn start`

## Live version at

[https://mums-deals.netlify.app](https://mums-deals.netlify.app/)

## Notes and Clarifications

I only implemented the required features. I didn't pay too much attention to styles or visual details.
I made it fairly responsive but there is still a lot to improve, including images aspect-ratios, positioning of the text, ui elements, etc.
I am fetching all products on one request, assuming there are only a few (if not pagination should be the way to go), I am taking care of removing duplicates, but I am not filtering the data that I need from the products, meaning I am loading all the data retrieved from the endpoint.
I used typescript to make it more realistic. I did not implement any kind of tests.

If any doubts or questions please feel free to contact me at: agustinc.jobs@gmail.com
