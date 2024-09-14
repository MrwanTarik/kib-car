import { useState } from "react";

function PaidServices() {
  const [width] = useState(window.innerWidth);
  const showMobileCom = width < 971;
  return (
    <div className="">
      <div className={`${!showMobileCom ? "container" : ""}`}>
        <div
          className={`" ${
            !showMobileCom
              ? "border-y border-[#eaebf2] bg-[#f1f3f7] px-[40px] py-[20px]"
              : "py-[12px] px-[10px]"
          } `}
        >
          <h2
            className={`uppercase ${
              !showMobileCom
                ? "text-[16px] font-bold leading-8 text-primary"
                : "text-[14px] font-medium text-primary"
            } `}
          >
            Types of paid services
          </h2>
        </div>
        <div className="px-5 text-[12px] md:text-[14px] leading-[28px]">
          {/* Posting of Advertisements */}
          <section className="text-[#739e5b] mt-[20px] mb-[60px] leading-8">
            <p className="text-[14px]">
              ــ{" "}
              <a className="text-base underline" href="#bumb">
                "Advance Search" service
              </a>
            </p>
            <p className="text-[14px]">
              ــ{" "}
              <a className="text-base underline" href="#vip">
                "VIP" service
              </a>
            </p>
            <p className="text-[14px]">
              ــ{" "}
              <a className="text-base underline" href="#featured">
                "Premium" service
              </a>
            </p>
            <p className="text-[14px]">
              ــ{" "}
              <a className="text-base underline" href="#limits">
                "Ad limit" service
              </a>
            </p>
            <p className="text-[14px]">
              ــ{" "}
              <a className="text-base underline" href="#relist">
                "Re-advertise" service
              </a>
            </p>
            <p className="text-[14px]">
              ــ{" "}
              <a className="text-base underline" href="#sms-pin">
                "SMS PIN"
              </a>
            </p>
            <p className="text-[14px]">
              ــ{" "}
              <a className="text-base underline" href="#recovery">
                "Ad recovery" service
              </a>
            </p>
          </section>
          <section className="mb-[60px]" id="bumb">
            <h2 className="my-[10px] font-bold text-[21px]">
              "Advance Search" Service
            </h2>
            <p className="my-4">
              "Advance Search" is a paid promotion service. This service ranks
              your ad higher than other similar ads. As a result, more potential
              buyers view your ad and you sell items faster.
            </p>

            <h4 className="my-[10px] font-bold">
              How does the "Search Forward" service work?
            </h4>
            <p className="my-4">
              Thousands of new ads are published on the Turbo.az website every
              day. These ads are ranked differently in search results. The
              position of each ad depends on many factors. For example, the date
              of publication of the ad, its relevance to the search query, as
              well as the applied services play an important role. Ads are
              sorted based on all these parameters.
            </p>
            <p className="my-4">
              "Promote in search": This service raises the ad above all free ads
              and is for one-time use. This service updates the publication date
              of the ad and makes it appear as if it had just been posted. In
              addition, the service prioritizes your ad - it ranks higher in
              search results than other similar ads that do not apply promotion.
            </p>
            <p className="my-4">
              The most favorable positions for the ad are those where users pay
              more attention. And it's not always the first lines of search
              results. Therefore, the "Advance in Search" service does not
              guarantee that your ad will be on the first line of search
              results.
            </p>
            <p className="my-4">
              You need to make sure that your ad is of good quality and relevant
              to the search query. For example, of the two ads applied to the
              service, the one with better quality will be ranked higher than
              the other.
            </p>

            <h4 className="my-[10px] font-bold">
              How much does the service cost?
            </h4>
            <p className="my-4">3 AZN - advance 1 time</p>
            <p className="my-4">6 AZN - withdraw 3 times (once in 24 hours)</p>
            <p className="my-4">9 AZN - withdraw 5 times (once in 24 hours)</p>
            <p className="my-4">
              15 AZN - withdraw 10 times (once in 24 hours)
            </p>

            <h4 className="my-[10px] font-bold">
              When is the service activated?
            </h4>
            <p className="my-4">
              The service starts as soon as the publication date of the ad is
              updated.
            </p>
            <p className="my-4">
              <strong>BONUS:</strong> when a new ad is posted, it climbs to the
              top of the search results for free.
            </p>

            <h4 className="my-[10px] font-bold">
              Does the service affect the duration of the ad?
            </h4>
            <p className="my-4">
              Since the "Advance Search" service is for one-time use, it does
              not affect the duration of the ad's activity if it is active on
              the site. The exception is cases where the ad's activity period
              expires earlier than the service period.
            </p>
            <p className="my-4">
              <strong>Example:</strong>
            </p>
            <p className="my-4">
              August 1: you placed a free ad - it is active for 30 days (from
              August 1 to 30).
            </p>
            <p className="my-4">
              August 5: 25 days left until the ad expires (August 5 to 30). If
              you activate the "Search forward" service, the duration of the ad
              will not change.
            </p>
            <p className="my-4">
              August 31: the ad has already expired (from August 1 to 30). If
              you activate the "Search forward" service, the ad will be restored
              once the service is applied and its active period will be extended
              for 3 days. If you activate the "Search 3 times forward" service,
              the ad will be reset by applying the service 3 times (once in 24
              hours) and its active period will be extended for 3 days. If you
              activate the "Search 5 times forward" service, the ad will be
              reset by applying the service 5 times (once in 24 hours) and its
              active period will be extended for 5 days.
            </p>

            <h4 className="my-[10px] font-bold">
              What will happen if I apply the service multiple times?
            </h4>
            <p className="my-4">
              If you purchase the "Search Forward" service several times, each
              order will be fulfilled immediately after payment.
            </p>
            <p className="my-4">
              The service is available in 5-minute intervals.
            </p>
            <p className="my-4">
              <strong>Example:</strong>
            </p>
            <p className="my-4">
              You apply the "Advance Search" service to the ad 5 times on
              Monday. In this case, the ad is postponed 5 times immediately
              after payment on the same day.
            </p>
          </section>
          <section className="mb-[60px]" id="vip">
            <h2 className="my-[10px] font-bold text-[21px]">"VIP" Service</h2>
            <p className="my-4">
              "VIP" is a paid promotion service. With the help of this service,
              the announcement appears in a special VIP-block in a random order
              and attracts more attention. On the cards of the announcements
              where the service is applied, the sign "V" is reflected in the
              lower right corner.
            </p>

            <h4 className="my-[10px] font-bold">
              How much does the service cost?
            </h4>
            <p className="my-4">5 AZN - 1 day</p>
            <p className="my-4">15 AZN - 5 days</p>
            <p className="my-4">25 AZN - 15 days</p>
            <p className="my-4">40 AZN - 30 days</p>

            <h4 className="my-[10px] font-bold">
              When is the service activated?
            </h4>
            <p className="my-4">
              The service is activated as soon as the payment is made. Depending
              on the number of days obtained, the ad can be placed in the VIP
              block for up to 30 days.
            </p>
            <p className="my-4">
              <strong>BONUS:</strong> "Advance search" service is applied to the
              ad 1 time per day for the number of days from the moment of
              activation of this service.
            </p>

            <h4 className="my-[10px] font-bold">
              I don't see my ad in the VIP block
            </h4>
            <p className="my-4">
              Announcements are placed in the "VIP announcements" block in
              random order on the top lines of the page.
            </p>
            <p className="my-4">
              The VIP-block on the search results page of the desktop version of
              the site displays up to 8 ads at the same time (with the option to
              show all).
            </p>
            <p className="my-4">
              In the VIP-block on the search results page of the mobile version
              of the site, up to 4 ads (with the option to show all) are
              displayed at the same time.
            </p>
            <p className="my-4">
              The VIP-block in the mobile application is repeated every 24 ads,
              and the block contains 2 ads (with the possibility of infinite
              scrolling).
            </p>
            <p className="my-4">
              During each page refresh, the system selects VIP-ads in such a way
              that ads with the same package receive approximately the same
              number of views. Even if you don't see an ad, you can be sure that
              other visitors are seeing it at that moment.
            </p>
            <p className="my-4">
              In addition, the VIP-block is displayed in the top positions on
              the category page, section page, and search results to which the
              ad belongs.
            </p>

            <h4 className="my-[10px] font-bold">
              Does the service affect the duration of the ad?
            </h4>
            <p className="my-4">
              It takes effect if the ad expires earlier than the service period.
              The minimum duration of the "VIP" service is 1 day, and it will be
              automatically extended if the standard activation period of the ad
              expires earlier.
            </p>
            <p className="my-4">
              If the ad has already expired, the ad will be renewed for a period
              equal to the term of this service from the moment the "VIP"
              service is applied.
            </p>
            <p className="my-4">
              <strong>Example:</strong>
            </p>
            <p className="my-4">
              August 1: you placed a free ad - it is active for 30 days (from
              August 1 to 30).
            </p>
            <p className="my-4">
              August 5: 25 days left until the ad expires (August 5 to 30). If
              you activate the "VIP" service, the duration of the ad will not
              change.
            </p>
            <p className="my-4">
              August 27: 3 more days until the ad expires (August 27 to 30). If
              you activate the "VIP" service for 5 days, the ad's activation
              period will be extended by 2 days so that the service remains
              active for 5 days.
            </p>
            <p className="my-4">
              August 31: the ad has already expired (from August 1 to 30). If
              you activate the "VIP" service, the ad will be restored and its
              activity period will be extended for 5 days.
            </p>

            <h4 className="my-[10px] font-bold">
              What will happen if I apply the service multiple times?
            </h4>
            <p className="my-4">
              The effect of VIP-settings will be active for a longer time. If
              you apply the 5-day "VIP" service twice, the VIP settings will be
              valid for 10 days. At the same time, bonus promotions will take
              place every day from the moment the service is activated -
              immediately after the service payment is made and until the
              service expires.
            </p>

            <h4 className="my-[10px] font-bold">
              Does the ad remain in the VIP-block after making changes to it?
            </h4>
            <p className="my-4">
              Yes, if these changes do not violate the rules of the site.
            </p>
            <p className="my-4">
              <strong>RECOMMENDATION:</strong> every ad placed on the site must
              be verified and it takes some time for this. Do not rush to use
              paid services and familiarize yourself with our rules.
            </p>
          </section>
          <section className="mb-[60px]" id="featured">
            <h2 className="my-[10px] font-bold text-[21px]">
              "Premium" Service
            </h2>
            <p className="my-4">
              "Premium" is a paid promotion service. Advertisements with the
              "Premium" service applied appear in a specially allocated block on
              the main page of the site and remain there until the end of their
              activity period. You can see all such ads on one page at the same
              time. On the cards of the announcements where the service is
              applied, the crown symbol is reflected in the lower right corner.
            </p>

            <h4 className="my-[10px] font-bold">
              How much does the service cost?
            </h4>
            <p className="my-4">7 AZN – 1 day</p>
            <p className="my-4">20 AZN – 5 days</p>
            <p className="my-4">45 AZN – 15 days</p>
            <p className="my-4">60 AZN – 30 days</p>

            <h4 className="my-[10px] font-bold">
              When is the service activated?
            </h4>
            <p className="my-4">
              The service is activated as soon as the payment is made. The ad
              can be placed in the Premium-block for up to 30 days, depending on
              the number of days obtained.
            </p>
            <p className="my-4">
              <strong>BONUS:</strong> "Advance Search" service and "VIP" service
              for the duration of the obtained service are applied to the ad 1
              time per day, according to the number of days from the moment of
              activation of this service.
            </p>

            <h4 className="my-[10px] font-bold">
              I don't see my ad in the Premium block
            </h4>
            <p className="my-4">
              The ad is placed in the premium-block on the home page until the
              premium-settings expire. Ads are located in the premium block
              according to the date of introduction of the service (from the
              newest to the oldest).
            </p>
            <p className="my-4">
              When the "Advance Search" service is applied to an ad in a premium
              block, the ad rises to a higher position among other ads in this
              block.
            </p>

            <h4 className="my-[10px] font-bold">
              Does the service affect the duration of the ad?
            </h4>
            <p className="my-4">
              It takes effect if the ad expires earlier than the service period.
              The minimum duration of the "Premium" service is 1 day, and if the
              standard activation period of the ad expires earlier, it will be
              automatically extended for a period of 24 hours from the moment
              the service is applied.
            </p>
            <p className="my-4">
              If the term of the ad has already expired, the ad will be renewed
              for a period equal to the term of this service from the moment the
              "Premium" service is applied.
            </p>
            <p className="my-4">
              <strong>Example:</strong>
            </p>
            <p className="my-4">
              August 1, 18:00: you placed a free ad - it is active for 30 days
              (from August 1 to 30).
            </p>
            <p className="my-4">
              August 5, 6:00 p.m.: 25 days left until the ad expires (August 5
              to 30). If you activate the 5-day "Premium" service, the duration
              of the ad will not change.
            </p>
            <p className="my-4">
              August 29, 6:00 p.m.: 1 day left until the ad expires (August 29
              to 30). If you activate the 5-day "Premium" service at 15:00, the
              active period of the ad will be extended by 4 days so that the
              service remains active for 5 days (both the service and the ad
              will expire on September 3, 15:00).
            </p>
            <p className="my-4">
              August 31: the ad has already expired (from August 1 to 30). If
              you activate the 5-day "Premium" service, the ad will be restored
              and its active period will be extended for 5 days.
            </p>

            <h4 className="my-[10px] font-bold">
              What will happen if I apply the service multiple times?
            </h4>
            <p className="my-4">
              The effect of premium settings will be active for a longer time.
              If you use the 5-day "Premium" service twice, the premium settings
              will be valid for 10 days. At the same time, bonus promotions will
              take place every day from the moment the service is activated -
              immediately after the service payment is made and until the
              service expires.
            </p>

            <h4 className="my-[10px] font-bold">
              Does the ad remain in the Premium-block after making changes to
              it?
            </h4>
            <p className="my-4">
              Yes, if these changes do not violate the rules of the site.
            </p>
            <p className="my-4">
              <strong>RECOMMENDATION:</strong> every ad placed on the site must
              be verified and it takes some time for this. Do not rush to use
              paid services and familiarize yourself with our rules.
            </p>
          </section>
          <section className="mb-[60px]" id="limits">
            <h2 className="my-[10px] font-bold text-[21px]">
              "Ad limit" Service
            </h2>
            <p className="my-4">
              "Ad limit" is the number of free ads that individual sellers can
              place in a 30-day period. When the limit is over, posting ads is
              paid.
            </p>
            <p className="my-4">
              There is no free ad limit for professional sellers. People who are
              engaged in business and extra income work place all ads on
              Turbo.az for a fee.
            </p>

            <h4 className="my-[10px] font-bold">
              Which ads count as using the limit?
            </h4>
            <p className="my-4">
              In the following cases, the limit is reduced by 1 number of ads:
            </p>
            <ul className="list-disc ml-8 my-4">
              <li>when placing an ad using the limit;</li>
              <li>when placing an ad and later canceling it;</li>
              <li>
                if the ad is blocked or not accepted due to duplicate posting;
              </li>
              <li>
                when restoring an ad that has already been removed from the
                site.
              </li>
            </ul>

            <h4 className="my-[10px] font-bold">
              How do I post an ad for free?
            </h4>
            <p className="my-4">
              Post an ad once every 30 days. If you take advantage of free ad
              placement and place one or more paid ads, the ad recovery day will
              remain the same.
            </p>
            <p className="my-4">
              <strong>Example:</strong>
            </p>
            <p className="my-4">
              Limit – 1 free ad per 30 days. You post the ad on May 1. Limit
              used. You will be able to place your next free ad on May 31. If
              you place a paid ad on May 5th, the limit reset date will not
              change and the next free ad will still be available on May 31st.
            </p>

            <h4 className="my-[10px] font-bold">
              Why was paid ad placement introduced?
            </h4>
            <p className="my-4">
              Thanks to paid ad placement, we reduce the number of duplicate and
              questionable ads on the Turbo.az website and limit the activity of
              fraudsters. At the same time, the number of views of the
              advertisements of our honest sellers increases, and the agreements
              speed up. For buyers, it is more convenient to find a vehicle
              among unique offers.
            </p>
            <p className="my-4">
              Paid ad placement is intended primarily for businessmen and
              companies who use Turbo.az as a regular source of income.
              Individuals post ads for free.
            </p>

            <h4 className="my-[10px] font-bold">Which ads are paid?</h4>
            <p className="my-4">
              Placements become paid when the free ad limit is reached.
            </p>

            <h4 className="my-[10px] font-bold">
              How much does the service cost?
            </h4>
            <p className="my-4">
              12 AZN – for individual sellers who have exhausted their free ad
              limit
            </p>
            <p className="my-4">
              30 AZN – for sellers operating on the site with a business account
            </p>
          </section>
          <section className="mb-[60px]" id="relist">
            <h2 className="my-[10px] font-bold text-[21px]">
              "Re-advertise" Service
            </h2>
            <p className="my-4">
              "Repeat advertisement" - placement of repeated and similar
              advertisements (brand/model, color) within 90 days on a paid
              basis.
            </p>
            <p className="my-4">
              A vehicle can be put up for sale for free only once within 90
              days.
            </p>

            <h4 className="my-[10px] font-bold">
              How much does the service cost?
            </h4>
            <p className="my-4">12 AZN – for individual sellers</p>
            <p className="my-4">
              30 AZN – for sellers operating on the site with a business account
            </p>

            <h4 className="my-[10px] font-bold">
              Why are ads not accepted due to duplicate postings?
            </h4>
            <p className="my-4">
              You are selling the same or similar vehicle through multiple ads.
              Within 90 days, you cannot:
            </p>
            <ul className="list-disc ml-8 my-4">
              <li>
                posting a new ad with the same or similar (make/model, color)
                vehicle;
              </li>
              <li>
                cancel the first ad and place a new ad for the same or similar
                vehicle;
              </li>
              <li>mention this vehicle in the description of another ad;</li>
              <li>to use images of this vehicle in another advertisement.</li>
            </ul>

            <h4 className="my-[10px] font-bold">How to sell a vehicle?</h4>
            <p className="my-4">
              Use the first ad. We block every ad with the same or similar
              offer, but keep the very first ad. If you have canceled it, you
              can restore it again. Recovery is chargeable.
            </p>
            <p className="my-4">
              If you forgot to mention something in the description, want to
              change the pictures or price, etc., please edit the first ad.
            </p>
            <p className="my-4">
              Apply paid services to your ad to rank higher in search results.
            </p>
            <p className="my-4">
              You can use the "Re-advertise" service to post a new ad that is
              not accepted due to repeated posting. In this case, the first
              advertisement will not be accepted.
            </p>

            <h4 className="my-[10px] font-bold">Why not repost?</h4>
            <p className="my-4">
              Duplicate ads make searching difficult. It is difficult to search
              for a product or service among duplicate ads - it is impossible to
              understand which ads you have seen before, which ones are
              duplicates, and which ones you haven't opened yet. This is often
              time-consuming and causes negative impressions. The purchase
              process takes too long or stops altogether.
            </p>

            <h4 className="my-[10px] font-bold">
              Can I place a repeat ad from another number?
            </h4>
            <p className="my-4">
              You cannot post the same or similar ad from another number within
              90 days. Even if it is the number of your friend, spouse, or
              neighbor - still not.
            </p>
          </section>
          <section className="mb-[60px]" id="sms-pin">
            <h2 className="my-[10px] font-bold text-[21px]">"SMS PIN"</h2>
            <p className="my-4">
              "SMS PIN" – recovery of the PIN code on a paid basis.
            </p>
            <p className="my-4">
              To make changes to the ad, you must enter the PIN code sent to the
              e-mail address when the ad was placed. In cases where the e-mail
              address is entered incorrectly or the PIN code is lost, it is
              possible to send it via SMS to the number specified in the
              advertisement.
            </p>

            <h4 className="my-[10px] font-bold">
              How much does the service cost?
            </h4>
            <p className="my-4">
              1 AZN – sending the PIN code to your number in the form of an SMS
            </p>

            <h4 className="my-[10px] font-bold">
              How else can I get the PIN code?
            </h4>
            <p className="my-4">
              The PIN-code of the ad is sent to the e-mail address when the ad
              is placed. If you do not wish to receive a PIN via SMS, please
              provide a valid and correct email address when posting an ad.
            </p>
            <p className="my-4">
              If you have lost or deleted the email containing the ad's PIN
              code, the code can be re-sent to that email address.
            </p>
          </section>
          <section className="mb-[60px]" id="recovery">
            <h2 className="my-[10px] font-bold text-[21px]">
              "Ad recovery" Service
            </h2>
            <p className="my-4">
              "Ad recovery" is a paid ad service. The service can only be
              applied to expired and canceled ads. The restoration extends the
              period of the ad for 30 days from the moment the service is
              applied.
            </p>

            <h4 className="my-[10px] font-bold">
              How does "ad recovery" work?
            </h4>
            <p className="my-4">
              The duration of the free ad on the site is 30 days. If this period
              expires automatically or the ad is canceled (accidentally or
              intentionally), then it gets the status of an inactive ad on the
              site. To restore your ad, you need to find this ad from your
              personal cabinet, mails sent when posting your ad, bookmarks saved
              in the browser, or selected on the site and click the "Restore"
              button at the bottom of it or on the card of the ad.
            </p>
            <p className="my-4">
              Recovery extends the duration of the ad by 30 days and moves it to
              the top of the search results once.
            </p>
            <p className="my-4">
              When restoring an ad, the user gets a new opportunity to reset the
              number of views of the ad and make corrections before publication.
            </p>
            <p className="my-4">
              During recovery, the amended ad must pass verification. The
              announcement will be published on the website immediately after
              the approval of the amendments. Unedited ads are published on the
              site without verification.
            </p>

            <h4 className="my-[10px] font-bold">
              How much does the service cost?
            </h4>
            <p className="my-4">12 AZN – for individual sellers</p>
            <p className="my-4">
              30 AZN – for sellers operating on the site with a business account
            </p>

            <h4 className="my-[10px] font-bold">
              When is the service activated?
            </h4>
            <p className="my-4">
              The service is activated as soon as the publication date of the ad
              is updated.
            </p>
            <p className="my-4">
              <strong>BONUS:</strong> during recovery, the ad rises to the top
              of the search results for free.
            </p>

            <h4 className="my-[10px] font-bold">
              Does the service affect the duration of the ad?
            </h4>
            <p className="my-4">
              "Ad recovery" service can be applied only to inactive ads, and
              while the ad is active on the site, the service does not affect
              its activity period in any way.
            </p>
            <p className="my-4">
              If an ad is unpublished before its expiration date, the renewal
              will extend the ad's expiration date by another 30 days.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PaidServices;
