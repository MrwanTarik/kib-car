import { useState } from "react";

function Rules() {
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
            Rules
          </h2>
        </div>
        <div className="px-5 text-[14px] md:text-base leading-[26px]">
          <h1 className="font-bold leading-normal my-5">General Rules</h1>
          <p className="mb-[10px]">
            Advertisement placement on{" "}
            <a href="/" className="text-link underline">
              Turbo.az
            </a>{" "}
            is governed by this{" "}
            <a href="/" className="text-link underline">
              User Agreement
            </a>{" "}
            (hereinafter - the Agreement). Violation of the Rules established on
            the site or multiple complaints of users on advertising may result
            in the blocking of the ad and the registration accounts of their
            owners. Please note that all ads must comply with the rules,
            regardless of whether additional services (
            <a href="/" className="text-link underline">
              Premium
            </a>
            ,{" "}
            <a href="/" className="text-link underline">
              VIP
            </a>
            , etc.) are applied to them. Even paid ads can be blocked or removed
            if the rules are violated. In order to ensure equal conditions for
            all users of the trading platform, everyone should familiarize
            themselves with and follow the rules of{" "}
            <a href="/" className="text-link underline">
              Turbo.az before posting an ad.
            </a>
          </p>

          {/* Posting of Advertisements */}
          <section className="my-[10px]">
            <h2 className="my-[10px]">1. Posting of Advertisements</h2>
            <p className="my-[10px]">
              <strong>1.1.</strong> During 30 days, the user can place only one
              free ad. Each new ad is paid - 12 AZN. The duration of the
              announcement is 30 days. If the ad has expired and the vehicle
              (hereafter NV) has not been sold, the user can restore this ad by
              paying 12 AZN for 30 days or by applying a paid service for a
              period equal to the duration of the service.
            </p>
            <p className="my-[10px]">
              <strong>1.2.</strong> During 90 days, a user can post only one
              free ad per NV. Posting a duplicate or similar (make/model, color)
              ad within 90 days is chargeable. The price of "Re-advertise"
              service is 12 AZN. After the re-ad is published, the previous ad
              is deleted.
            </p>
            <p className="my-[10px]">
              <strong>1.3.</strong> In the advertisement on the site, it is
              forbidden to change the information and pictures about NV with the
              information and pictures of other NV.
            </p>
            <p className="my-[10px]">
              <strong>1.4.</strong> If the same NV is found in separate ads on
              the site at the same time, both ads are deleted. 12 AZN must be
              paid to restore one of the two ads or to place a new ad.
            </p>
            <p className="my-[10px]">
              <strong>1.5.</strong> Any ad restoration is subject to a fee. The
              price of the service is 12 AZN.
            </p>
            <p className="my-[10px]">
              <strong>1.6.</strong> Any paid service will restore the ad for the
              period of service and extend the duration of the ad.
            </p>
            <p className="my-[10px]">
              <strong>1.7.</strong> Ads with status "On order" refer to ads of
              NV that are not in stock.
            </p>
            <p className="my-[10px]">
              <strong>1.8.</strong> The opportunity to place an ad with the
              status "On order" is given only to official dealers, car
              showrooms, and companies specializing in the service of delivery
              of cars to order.
            </p>
            <ol className="list-decimal pl-10 my-[10px]">
              <li className="my-[10px]">
                <a href="/" className="text-link underline">
                  Requirements to ensure the possibility of publishing an ad
                  with the status "On order".
                </a>
              </li>
              <li className="my-[10px]">
                <a href="/" className="text-link underline">
                  Obligations of companies providing cars with "on order"
                  status.
                </a>
              </li>
              <li className="my-[10px]">
                <a href="/" className="text-link underline">
                  Recommendations for the buyer buying a car on order.
                </a>
              </li>
            </ol>
            <p className="my-[10px]">
              <strong>1.9.</strong> Posting and restoration of ads with the
              status "On order" is possible only within the framework of the
              active business package.
            </p>
            <p className="my-[10px]">
              <strong>1.10.</strong> Companies specializing in the delivery of
              cars to order are only allowed to publish ads with the status "On
              Order".
            </p>
          </section>

          {/* Images */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">2. Images</h2>
            <p className="my-[10px]">
              <strong>2.1.</strong> The maximum number of photos in the ad is
              21. The ad must include a minimum of three pictures: the front of
              the NV, the rear, and the full front of the interior of the NV.
            </p>
            <p className="my-[10px]">
              <strong>2.2.</strong> The minimum size of images is 1024x768
              pixels.
            </p>
            <p className="my-[10px]">
              <strong>2.3.</strong> Photos must be of good quality.
            </p>
            <p className="my-[10px]">
              <strong>2.4.</strong> Images taken in the dark are acceptable only
              when the NV is artificially illuminated sufficiently.
            </p>
            <p className="my-[10px]">
              <strong>2.5.</strong> "Screenshot" images are not published.
              Images with frames or with black/white lines will not be
              published.
            </p>
            <p className="my-[10px]">
              <strong>2.6.</strong> The vehicle must be towed in the territory
              of the Republic of Azerbaijan.
            </p>
            <p className="my-[10px]">
              <strong>2.7.</strong> Images must not contain the kibcar.com logo
              or any other logo.
            </p>
            <p className="my-[10px]">
              <strong>2.8.</strong> The horizon line in the images should be
              exactly parallel to the top/bottom lines of the image.
            </p>
            <p className="my-[10px]">
              <strong>2.9.</strong> The use of stickers and emoticons to hide NV
              license plates and people in photos is prohibited.
            </p>
            <p className="my-[10px]">
              <strong>2.10.</strong> Images should not contain advertising
              information.
            </p>
            <p className="my-[10px]">
              <strong>2.11.</strong> Pictures should not show the means of
              communication.
            </p>
            <p className="my-[10px]">
              <strong>2.12.</strong> Photos taken at a car dealership can only
              be posted on behalf of that car dealership.
            </p>
            <p className="my-[10px]">
              <strong>2.13.</strong> It is forbidden to post NV pictures of
              strangers or pictures taken from the Internet!
            </p>
            <p className="my-[10px]">
              <strong>2.14.</strong> The color of the car should be clearly
              visible in the photo.
            </p>
            <p className="my-[10px]">
              <strong>2.15.</strong> The pictures must show the car as it is in
              its current condition.
            </p>
            <p className="my-[10px]">
              <strong>2.16.</strong> If the NV is disabled, the user must
              mention this when posting an ad. At this time, the "Accident" sign
              will appear on the ad.
            </p>
            <p className="my-[10px]">
              <strong>2.17.</strong> Photos for ads with the status "On order"
              can be taken on the territory of the Republic of Azerbaijan,
              abroad and using the configurator (only for official dealers).
            </p>
            <ol className="list-decimal pl-10 my-[10px]">
              <li className="my-[10px]">
                If the car was built in the territory of Azerbaijan, then only a
                new car and not older than one year can be imported.
              </li>
              <li className="my-[10px]">
                Photos with the logo of other sites cannot be added.
              </li>
            </ol>
            <p className="my-[10px]">
              <strong>2.18.</strong> The minimum number of photos in an ad with
              the status "On order" is 7. Exterior: left, right, front and rear
              sides of the car. Interior: front and rear seats, and dashboard.
            </p>
            <p className="my-[10px]">
              <strong>2.19.</strong> It is forbidden to upload ads with the same
              photo with the status "On order".
            </p>
            <ol className="list-decimal pl-10 my-[10px]">
              <li className="my-[10px]">
                If the ad contains different vehicle configurations, the user
                can indicate this in the additional information section of the
                ad.
              </li>
            </ol>
          </section>

          {/* Price */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">3. Price</h2>
            <p className="my-[10px]">
              <strong>3.1.</strong> The full value of the NV must be noted. If
              the NV is on loan, the terms of the loan must be stated in the
              description of the ad. It is forbidden to enter the initial
              payment amount in the "Price" field.
            </p>
            <p className="my-[10px]">
              <strong>3.2.</strong> The price of cars with the status "On order"
              should be as close as possible to the final price, including
              customs clearance, delivery to the Republic of Azerbaijan, as well
              as other costs.{" "}
              <a href="/" className="text-link underline">
                Turbo.az
              </a>{" "}
              may take restrictive measures in accordance with its rules in case
              of intentional misinformation and price manipulation by the seller
              . This also includes restriction of access to place ads on the{" "}
              <a href="/" className="text-link underline">
                Turbo.az
              </a>{" "}
              website and non-return of funds for unused services.
            </p>
          </section>

          {/* Description */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">4. Description</h2>
            <p className="my-[10px]">
              <strong>4.1.</strong> The information in the description should
              not contain offensive words and advertising information.
            </p>
            <p className="my-[10px]">
              <strong>4.2.</strong> Entering a mobile number or other contact
              information is prohibited.
            </p>
            <p className="my-[10px]">
              <strong>4.3.</strong> The information written in the description
              must correspond to the information indicated in the box.
            </p>
          </section>

          {/* Means of Communication */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">5. Means of Communication</h2>
            <p className="my-[10px]">
              <strong>5.1.</strong> Personal contact information must be
              correctly entered: name, e-mail address, phone number.
            </p>
            <p className="my-[10px]">
              <strong>5.2.</strong> No changes are made to the phone number
              after the advertisement is published.
            </p>
            <p className="my-[10px]">
              <strong>5.3.</strong> To make any changes to the ad, enter the PIN
              that was sent to your e-mail address when the ad was published. If
              you entered your e-mail address incorrectly or lost the
              PIN-password of the ad, then the password can be sent to your
              phone number (this service is paid - 1 AZN).
            </p>
            <p className="my-[10px]">
              <strong>5.4.</strong> If the phone number is entered incorrectly
              in the ad, the ad will be removed from the site.
            </p>
            <p className="my-[10px]">
              <strong>5.5.</strong> The user is responsible for the accuracy and
              completeness of the ad posted, its compliance with the Legislation
              of the Republic of Azerbaijan, the fact that the information
              posted in the ad does not violate the rights of third parties and
              is free from their claims.
            </p>
          </section>
          {/* Amending the ad */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">6. Amending the ad</h2>
            <p className="my-[10px]">
              <strong>6.1.</strong> To edit an ad, access the ad and click the
              "Edit" button. Unpublished ads cannot be edited.
            </p>
            <p className="my-[10px]">
              <strong>6.2.</strong> It is possible to make changes only twice in
              a day.
            </p>
            <p className="my-[10px]">
              <strong>6.3.</strong> No changes are made to this information:
              contact information, make, model, year of release.
            </p>
            <p className="my-[10px]">
              <strong>6.4.</strong> If the amended ad does not comply with the
              rules, the amendment will not be accepted.
            </p>
            <p className="my-[10px]">
              <strong>6.5.</strong> After correction, the ad is reviewed within
              one hour.
            </p>
          </section>
          {/*Black list */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">7. Black list</h2>
            <p className="my-[10px]">
              <strong>7.1.</strong>The user who disrespects the operator or
              moderator will have his communication tools blocked and he will
              not be able to post an ad on{" "}
              <a href="/" className="text-link underline">
                the Turbo.az
              </a>{" "}
              website!
            </p>
            <p className="my-[10px]">
              <strong>7.2.</strong> A user who mentions a different price in the
              ad and later tells a different price on the phone, posts pictures
              of another NV or violates any other rules, will be blacklisted and
              will no longer be able to post an ad on{" "}
              <a href="/" className="text-link underline">
                the Turbo.az
              </a>{" "}
              website!
            </p>
            <p className="my-[10px]">
              <strong>7.3.</strong> If the user violates the rules of the
              "Re-advertise" service, the user will be warned for the first
              time, if he violates the rules again, he will be blacklisted.
            </p>
            <p className="my-[10px]">
              <strong>7.4.</strong> When it is discovered that the vehicle ads
              placed by a private person (ordinary user) are being sold by the
              car dealership, the ad will be deleted and the user's contact
              information will be added to the black list. In this case, the
              money paid is not returned.
            </p>
            <p className="my-[10px]">
              <strong>7.5.</strong> It is not possible to remove contacts from
              the blacklist.
            </p>
            <p className="my-[10px]">
              <strong>7.6.</strong> When a third party's contacts are flagged
              and that person complains, the contacts are blacklisted.
            </p>
          </section>
          {/* Car dealerships and other persons engaged in commercial activities */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">
              8. Car dealerships and other persons engaged in commercial
              activities
            </h2>
            <p className="my-[10px]">
              <strong>8.1.</strong> If the user is found to be trading, his
              personal account will be transferred to a trading account.
            </p>
            <p className="my-[10px]">
              <strong>8.2.</strong> All the above-mentioned rules also apply to
              car dealerships and other persons engaged in commercial
              activities.
            </p>
            <p className="my-[10px]">
              <strong>8.3.</strong> The price of each ad for car dealerships and
              other persons engaged in commercial activities is AZN 30.
            </p>
            <p className="my-[10px]">
              <strong>8.4.</strong> There is a fee to restore the ad. The price
              of the service is AZN 30.
            </p>
            <p className="my-[10px]">
              <strong>8.5.</strong> To place an ad on behalf of the auto salon,
              one of the paid packages must be purchased. Each package has a
              certain number of ads (limit). The package is active for one
              month. When the ad limit specified in the package ends, the price
              of each next ad is AZN 30.
            </p>
            <p className="my-[10px]">
              <strong>8.6.</strong> Official representatives cannot create a
              multi-brand page on{" "}
              <a href="/" className="text-link underline">
                Turbo.az
              </a>{" "}
              . A separate page should be obtained for each vehicle brand they
              represent. This rule does not apply to car dealerships that are
              not official representatives.
            </p>
            <p className="my-[10px]">
              <strong>8.7.</strong> An official representative (hereinafter
              dealer/distributor) is a car dealership that has the official
              status of a dealer or distributor of one or more car brands. These
              car dealerships are officially authorized to sell cars from major
              manufacturers or distributors.
            </p>
            <p className="my-[10px]">
              <a href="/" className="text-link underline">
                The presence of official representatives on the Turbo.az
              </a>{" "}
              website gives potential buyers the opportunity to buy cars sold
              directly from the manufacturer. When buying a car from official
              representatives, the buyer gets an additional warranty and
              service. To get official representative status at{" "}
              <a href="/" className="text-link underline">
                Turbo.az
              </a>{" "}
              , a car dealership must meet the following criteria:
            </p>
            <ol className="list-decimal pl-10 my-[10px]">
              <li className="my-[10px]">
                Information about representation on the brand's official
                website.
              </li>
              <li className="my-[10px]">
                A car dealership must have an official license to sell cars from
                the relevant manufacturer or distributor.
              </li>
              <li className="my-[10px]">
                Confirmation from the manufacturer or distributor that this car
                dealership is an official representative.
              </li>
            </ol>
            <p className="my-[10px]">
              Unofficial representatives are prohibited from using the symbols{" "}
              <strong>in their logos</strong> without the permission of{" "}
              <strong>the intellectual property rights holders</strong> .
              Unofficial dealerships may not use the terms "
              <strong>dealer</strong> ", " <strong>official dealer</strong>" and
              "{" "}
              <strong>
                distributor " in their name or dealership information.
              </strong>
            </p>
            <p className="my-[10px]">
              <strong>Logo (emblem)</strong> – a combination of symbols (words,
              letters, numbers, graphic elements, etc.) that allows
              distinguishing a commercial entity.
            </p>
            <p className="my-[10px]">
              <strong>Symbols</strong> – a set of symbols (letters, words,
              graphic elements, etc.) used by various commercial subjects or
              other subjects to distinguish themselves.
            </p>
            <p className="my-[10px]">
              <strong>8.8.</strong> It is possible to use the balance of paid
              ads to restore the ad placed on behalf of the auto salon. When the
              balance of paid ads is used, the fee for each ad restoration will
              be AZN 30.
            </p>
            <p className="my-[10px]">
              <strong>8.9.</strong> The administration of the{" "}
              <a href="/" className="text-link underline">
                Turbo.az
              </a>{" "}
              site reserves the right to cancel the contract in case of
              deliberate violation of the rules of the site. In this case, the
              money paid is not returned.
            </p>
          </section>
          {/* Technical support service */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">
              9. Technical support service
            </h2>
            <p className="my-[10px]">
              <strong>9.1.</strong>Technical support phones are open 7 days a
              week from 09:00 to 19:00.
            </p>
            <p className="my-[10px]">
              <strong>9.2.</strong> When applying for technical support, the
              announcement number must be mentioned. The ad number is sent to
              your e-mail address when the ad is posted.
            </p>
            <p className="my-[10px]">
              Even paid ads can be canceled if rules are violated.
            </p>
            <p className="my-[10px]">
              Fees paid for paid services are NON-REFUNDABLE if the service has
              already been rendered. Also, the service start time cannot be
              changed later/earlier, the service cannot be rescheduled.
            </p>
            <p className="my-[10px]">
              For each unpublished ad, an automatic service notification
              (message) explaining the reason for the ad's deletion is sent to
              the e-mail address specified by the user when publishing the ad.
            </p>
            <p className="my-[10px]">
              {" "}
              <a href="/" className="text-link underline">
                The Management of the Turbo.az
              </a>{" "}
              site reserves the right to unilaterally change the Rules at any
              time, without prior notice.
            </p>
            <p className="my-[10px]">
              Using any information, material and photo without the written
              permission of the administration will be considered illegal and
              will be punished according to the Laws of the Republic of
              Azerbaijan.
            </p>
          </section>
          <p className="my-[10px]">Last update date – 11.09.2024</p>
        </div>
      </div>
    </div>
  );
}

export default Rules;
