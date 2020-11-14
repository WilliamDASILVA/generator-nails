FROM ruby:2.7.1 as release

WORKDIR /api

RUN apt-get update -qq && apt-get install -y libxslt-dev libxml2-dev build-essential patch ruby-dev zlib1g-dev liblzma-dev libpq-dev

COPY . .

RUN bundle install

EXPOSE 3000

CMD ["rails", "s"]
