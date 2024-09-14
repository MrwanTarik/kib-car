import { useState } from "react";

function Terms() {
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
            User agreement
          </h2>
        </div>
        <div className="px-5 text-[14px] md:text-base leading-[26px]">
          {/* Posting of Advertisements */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">1. General conditions</h2>
            <p className="my-[10px]">
              <strong>1.1.</strong> This Agreement defines the terms of use by
              the Users of the{" "}
              <a href="/" className="text-link underline">
                https://kibcar.com
              </a>{" "}
              Service.
            </p>
            <p className="my-[10px]">
              <strong>1.2.</strong> For the purposes of this User Agreement, the
              following terms and definitions shall have the following meaning:
            </p>
            <p className="my-[10px]">
              <strong>1.2.1.</strong> Service — Internet resource (site) located
              on the Internet at{" "}
              <a href="/" className="text-link underline">
                https://kibcar.com
              </a>{" "}
              , add-ons, and other services to the site based on various
              operating systems, as well as software, design (graphic design) of
              the site, add-ons, and other services, database, any section
              (semi-sections) of the services, as well as information posted by
              the Administration and Users in the services.
            </p>
            <p className="my-[10px]">
              <strong>1.2.2.</strong> Administration — The administration of the
              service is carried out by "DIGITAL CLASSIFIEDS LLC" Company (TIN:
              1405631661), established and registered in accordance with the
              legislation of the Republic of Azerbaijan. All ownership rights to
              the Service belong exclusively to the Company.
            </p>
            <p className="my-[10px]">
              <strong>1.2.3.</strong> User is a person with any legal authority
              who has accepted the terms of the agreement and uses the Services.
            </p>
            <p className="my-[10px]">
              <strong>1.2.4.</strong> Personal cabinet is a collection of
              information and settings defined (placed) by the User of the
              User's environment. Any User is entitled to have only one Personal
              cabinet.
            </p>
            <p className="my-[10px]">
              <strong>1.2.5.</strong> Personal account — an account for
              accounting the balance of funds that belongs to the User and can
              be used only for payments within the Turbo.az site.
            </p>
            <p className="my-[10px]">
              <strong>1.2.6.</strong> User's personal information — is
              information about the User or a set of information that includes
              information about the User himself, the User's personal
              information, information automatically transmitted to the
              Administration in the process of using the Service, including IP
              address, information from cookies, about the User's browser and
              other information about the User, which provides registration time
              freely or in the process of using the Service.
            </p>
            <p className="my-[10px]">
              <strong>1.2.7.</strong> Information — any information placed on
              the Service by the User or the Administration.
            </p>
            <p className="my-[10px]">
              <strong>1.2.8.</strong> Spam is unsolicited and/or unsolicited
              advertising, information, promotional, or other mailings and other
              mailings by recipients.
            </p>
            <p className="my-[10px]">
              <strong>1.2.9.</strong> Service package — a set of commercially
              profitable services/bonuses/discounts/announcements, which
              includes additional services, created privately for users engaged
              in commercial activities. When buying the package, the User gets
              certain advantages. The amount paid for the service package is not
              refundable after its activation.
            </p>
            <p className="my-[10px]">
              <strong>1.2.10.</strong> Discount — A reduction in the actual
              prices of paid Services applied to the promotion of
              advertisements.
            </p>
            <p className="my-[10px]">
              <strong>1.2.11.</strong> The Parties to this Agreement are the
              Administration and the User.
            </p>
            <p className="my-[10px]">
              <strong>1.3.</strong> Any terms and concepts used in that User
              Agreement that are not defined in the "Terms and definitions"
              section shall be interpreted according to the meaning arising from
              the text of the User Agreement. In case of any disagreement about
              the interpretation of the term or definition used in the User
              Agreement, the interpretation determined by the Administration
              will be applied.
            </p>
            <p className="my-[10px]">
              <strong>1.4.</strong> The use of services and materials of the
              Service is regulated by the norms of the applicable legislation,
              as well as by this Agreement.
            </p>
            <p className="my-[10px]">
              <strong>1.5.</strong> This Agreement is a public offering.
            </p>
            <p className="my-[10px]">
              <strong>1.6.</strong> By using the Services, the User agrees to
              this Agreement and accepts its terms and obligations to comply
              with the instructions for using the Services.
            </p>
            <p className="my-[10px]">
              <strong>1.7.</strong> By using the Service on behalf of the
              Company, the Company accepts this Agreement and its terms.
            </p>
            <p className="my-[10px]">
              <strong>1.8.</strong> The Administration has the right to
              unilaterally change the terms of this Agreement at any time.
            </p>
            <p className="my-[10px]">
              <strong>1.9.</strong> If the user does not agree with the terms of
              this Agreement or the changes included in it, he should refuse
              access to the Service and stop using the services of the Service.
            </p>
            <p className="my-[10px]">
              <strong>1.10.</strong> With this, the Administration offers Users
              the services of placing and searching for advertisements using the
              services of the Service.
            </p>
            <p className="my-[10px]">
              <strong>1.11.</strong> Provision of separate services may be
              governed by specific rules and/or agreements.
            </p>
            <p className="my-[10px]">
              <strong>1.12.</strong> The User accepts the provision that all
              materials and services of the Service or any part thereof may be
              accompanied by advertising. The user agrees that the
              Administration does not bear any responsibility and does not have
              any obligations related to such advertising.
            </p>
            <p className="my-[10px]">
              <strong>1.13.</strong> Registration in the service is voluntary.
              In case of registration in the Service, the User accesses
              additional services of the Service. The Administration reserves
              the right to request confirmation of the information provided by
              the User at the time of registration and confirmation documents at
              any time.
            </p>
            <p className="my-[10px]">
              <strong>1.14.</strong> The user undertakes to keep his password
              confidential. The User is responsible for the actions using his
              email address and password, as well as for the actions performed
              in the User's Personal cabinet. The User has the right to use the
              Service services only by using his personal email address and
              password. If the User has grounds to suspect unauthorized access
              to his Personal cabinet, the User undertakes to freely change his
              password.
            </p>
            <p className="my-[10px]">
              <strong>1.15.</strong> The Administration has the right to use
              special technical solutions to verify the correctness of the
              information provided by the Users during registration and/or
              authorization.
            </p>
            <p className="my-[10px]">
              <strong>1.16.</strong> The Administration cannot guarantee that
              the User is really as presented, and the information provided by
              the User during registration on the Service is correct.
            </p>
            <p className="my-[10px]">
              <strong>1.17.</strong> The User is advised to communicate with
              potential counterparties using all available tools on the Service.
            </p>
            <p className="my-[10px]">
              <strong>1.18.</strong> The Administration reserves the right, at
              its own discretion, to terminate access to the User's services in
              violation of the terms of this Agreement.
            </p>
            <p className="my-[10px]">
              <strong>1.19.</strong> The Service reserves the right to limit or
              terminate the User's access to the Service in case of violation of
              the rights of other persons or applicable law, as well as for
              other reasons.
            </p>
            <p className="my-[10px]">
              <strong>1.20.</strong> The user, whose access to the services has
              been suspended, or whose data is invalid, does not have the right
              to re-register without the special permission of the
              Administration. Such User is also not entitled to use the
              registration data of another User to access the Service and its
              services.
            </p>
          </section>

          {/* Images */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">
              2. Use of the Service. Posting of ads
            </h2>
            <p className="my-[10px]">
              <strong>2.1.</strong> The Administration grants all registered and
              unregistered Users the right to place ads on the Service after
              filling out a special form.
            </p>
            <p className="my-[10px]">
              <strong>2.2.</strong> The User agrees not to initiate actions that
              can be considered as a violation of the norms of legislation or
              international law, including in the field of intellectual
              property, authors and/or related rights, as well as any actions
              that lead to or may lead to disruption of the normal operation of
              the Service.
            </p>
            <p className="my-[10px]">
              <strong>2.3.</strong> All agreements on NV are made directly
              between Users. The Service is not a participant and/or mediator of
              the agreements made by the Users through the Service. The
              Administration does not control and is not responsible for such
              agreements.
            </p>
            <p className="my-[10px]">
              <strong>2.4.</strong> The user's comments and other notes on the
              Service should not conflict with the requirements of the law and
              generally accepted norms of morality.
            </p>
            <p className="my-[10px]">
              <strong>2.5.</strong> The User is warned that the Administration
              is not responsible for his access to and use of external
              resources, references to which may be on the Service. The
              Administration is not responsible for the content of
              announcements, references to other resources, and other
              information indicated in the description of announcements.
            </p>
            <p className="my-[10px]">
              <strong>2.6.</strong> In order to obtain the right to publish
              announcements, data, and information provided by the User, the
              User grants to the Administration the right to use, distribute,
              publish, collect, process, display, copy, reproduce, valid
              anywhere, indefinitely, irrevocably, non-exclusively, to reproduce
              images, pictures, video, and audio materials, databases,
              publications, copyrights and intellectual property rights, as well
              as any other information on all known or unknown information
              carriers by the User. The rights listed above are provided to the
              Administration free of charge. The User grants all Users of the
              Service the right to access the information posted by him. In
              addition, the User has any intellectual property rights to the
              materials placed by him on the Service.
            </p>
            <p className="my-[10px]">
              <strong>2.7.</strong> The Service is not responsible for the
              violation of the rights of third parties in connection with the
              provision of any information and data by the user.
            </p>
            <p className="my-[10px]">
              <strong>2.8.</strong> The user of the Service undertakes to post
              advertisements in accordance with the instructions of the Service
              and to provide reliable and complete information about the NV and
              its terms of sale. The user must check the information about NV
              shown in the ad and, if incorrect or incomplete information is
              found, correct or complete the necessary information in the ad.
            </p>
            <p className="my-[10px]">
              <strong>2.9.</strong> By placing an ad with NV, the User confirms
              that he has the right to perform such actions on NV as indicated
              in the ad.
            </p>
            <p className="my-[10px]">
              <strong>2.10.</strong> The User confirms that he/she has all
              necessary rights, licenses, permissions, including all patents,
              trademarks, trade secrets, intellectual property rights, or the
              corresponding written consent, license, or permission to use
              images or other objects.
            </p>
            <p className="my-[10px]">
              <strong>2.11.</strong> The Service has the right to request from
              the User additional information about the posted NV and/or
              documentation confirming the information provided by the User. The
              Service reserves the right to withhold publication until such
              documentation or information is provided.
            </p>
            <p className="my-[10px]">
              <strong>2.12.</strong> The User has the right to sell any NV
              belonging to him on the Service, provided that no special
              permissions are required for this and subject to compliance with
              the applicable rules of use.
            </p>
            <p className="my-[10px]">
              <strong>2.13.</strong> In order to support the high quality of the
              Services, the Service reserves the right to limit the amount of
              active advertisements of the User on the Service, as well as to
              limit the actions of the User on the Service.
            </p>
            <p className="my-[10px]">
              <strong>2.14.</strong> The description provided by the NV User in
              the advertisement constitutes these NV terms of sale.
            </p>
            <p className="my-[10px]">
              <strong>2.15.</strong> The terms of presentation of the service or
              the terms of sale and the NV description, as well as other terms
              of the ad, specified in the ad must not conflict with the
              legislation in force at the time of posting the ad and in the
              future and the current Agreement.
            </p>
            <p className="my-[10px]">
              <strong>2.16.</strong> Advertisements are prohibited on the
              service, the publication of which violates the applicable law, is
              contrary to generally accepted standards of morality, is offensive
              or inappropriate, as well as violates the rights of third parties.
            </p>
            <p className="my-[10px]">
              <strong>2.17.</strong> The use of paid services does not guarantee
              that the ad will not be blocked by the Administration in case of
              violation of this Agreement. In case of violation of the rules of
              placing ads, money for paid services is not returned.
            </p>
            <p className="my-[10px]">
              <strong>2.18.</strong> In the advertisement, it is forbidden to
              include links to websites that contain sales, use offers or other
              information about goods and services.
            </p>
            <p className="my-[10px]">
              <strong>2.19.</strong> The user undertakes not to support the
              provided services and not to disseminate information about:
            </p>
            <p className="my-[10px]">
              <strong>2.19.1.</strong> by other trading platforms, online
              auctions and/or online stores;
            </p>
            <p className="my-[10px]">
              <strong>2.19.2.</strong> By other services that offer the same or
              less paid goods and services on the Service;
            </p>
            <p className="my-[10px]">
              <strong>2.19.3.</strong> By other services that offer prohibited
              goods and services for sale on the Service.
            </p>
            <p className="my-[10px]">
              <strong>2.20.</strong> The User undertakes not to use automatic
              programs for obtaining access to the Service without the written
              permission of the Administration. The use of computer programs
              that allow the posting of advertisements beyond the normal order
              of posting of advertisements is prohibited without the written
              permission of the Administration.
            </p>
            <p className="my-[10px]">
              <strong>2.21.</strong> In addition, the User undertakes:
            </p>
            <p className="my-[10px]">
              <strong>2.21.1.</strong> Not to initiate any action that may lead
              to a heavy load on the infrastructure of the Service;
            </p>
            <p className="my-[10px]">
              <strong>2.21.2.</strong> Not to copy, repeat, change, distribute
              or present to the public any information contained in the Service
              without the prior written permission of the Administration;
            </p>
            <p className="my-[10px]">
              <strong>2.21.3.</strong> Not to interfere with the operation of
              the Service with the aim of preventing or limiting access to the
              Service, as well as not to interfere with the operation of
              automatic systems or processes;
            </p>
            <p className="my-[10px]">
              <strong>2.22.</strong> Information provided by the User and his
              actions on the Service should not:
            </p>
            <p className="my-[10px]">
              <strong>2.22.1.</strong> falsehood, inaccuracy or deception;
            </p>
            <p className="my-[10px]">
              <strong>2.22.2.</strong> do not allow fraud, deception or abuse of
              confidence;
            </p>
            <p className="my-[10px]">
              <strong>2.22.3.</strong> leading to the conclusion of agreements
              with stolen or counterfeit goods;
            </p>
            <p className="my-[10px]">
              <strong>2.22.4.</strong> violate the property of a third party or
              encroach on his right to privacy or trade secret;
            </p>
            <p className="my-[10px]">
              <strong>2.22.5.</strong> do not contain information that offends
              someone's honor, dignity or business reputation;
            </p>
            <p className="my-[10px]">
              <strong>2.22.6.</strong> do not slander or threaten anyone;
            </p>
            <p className="my-[10px]">
              <strong>2.22.7.</strong> inciting to commit a crime, as well as
              inciting inter-ethnic enmity;
            </p>
            <p className="my-[10px]">
              <strong>2.22.8.</strong> enable, support or incite terrorist and
              extremist activity;
            </p>
            <p className="my-[10px]">
              <strong>2.22.9.</strong> be obscene or pornographic in nature;
            </p>
            <p className="my-[10px]">
              <strong>2.22.10.</strong> harboring computer viruses, as well as
              other computer programs, in particular, causing damage,
              unauthorized interference, secret interception or the data of any
              system or the system itself, or its part, or personal information
              or other data (including data of the Service being) aimed at
              mastering;
            </p>
            <p className="my-[10px]">
              <strong>2.22.11.</strong> store promotional materials;
            </p>
            <p className="my-[10px]">
              <strong>2.22.12.</strong> violate the intellectual rights of third
              parties, the right to a citizen's image and other rights of third
              parties;
            </p>
            <p className="my-[10px]">
              <strong>2.22.13.</strong> otherwise violate applicable law.
            </p>
            <p className="my-[10px]">
              <strong>2.23.</strong> The User is prohibited from placing
              advertisements on the Service, concluding or executing agreements
              using the services on the Service, which may lead to violation of
              the legislation in force by the Service and/or its User.
            </p>
            <p className="my-[10px]">
              <strong>2.24.</strong> The Administration has the right to
              advertise the NV advertised on the Service in a different way
              specified by the User during the announcement of such NV.
            </p>
            <p className="my-[10px]">
              <strong>2.25.</strong> The Administration has the right to change
              the location, suspend, terminate or extend the display periods of
              any advertisement for reasons related to or independent of the
              Service.
            </p>
            <p className="my-[10px]">
              <strong>2.26.</strong> The Administration has the right to stop
              the display of any advertisement at any time for reasons that
              violate the rules stated in this Agreement, as well as for reasons
              that violate the rights of other Users or violate the applicable
              law, as well as for other reasons.
            </p>
            <p className="my-[10px]">
              <strong>2.27.</strong> The administration has the right to amend
              the announcements, transfer them to other sections, and also take
              any other actions with the announcements of the Users.
            </p>
            <p className="my-[10px]">
              <strong>2.28.</strong> Administration has the right to refuse
              posting (publication) of announcements.
            </p>
            <p className="my-[10px]">
              <strong>2.29.</strong> The requirements for registration of the
              announcement are set in the "{" "}
              <a href="/" className="text-link underline">
                Rules of the Site
              </a>{" "}
              " section of the rules for publishing announcements on the
              Service.
            </p>
            <p className="my-[10px]">
              <strong>2.30.</strong> The user bears full and exclusive
              responsibility for the content of the announcements under
              applicable law.
            </p>
          </section>

          {/* Price */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">3. Paid services</h2>
            <p className="my-[10px]">
              <strong>3.1.</strong> Users can order paid services on the
              Service.
            </p>
            <p className="my-[10px]">
              <strong>3.2.</strong>{" "}
              <a href="/" className="text-link underline">
                Types of paid services
              </a>{" "}
            </p>
            <p className="my-[10px]">
              <strong>3.2.1.</strong>{" "}
              <a href="/" className="text-link underline">
                Go ahead in your search
              </a>{" "}
            </p>
            <p className="my-[10px]">
              <strong>3.2.2.</strong>{" "}
              <a href="/" className="text-link underline">
                VIP
              </a>{" "}
            </p>
            <p className="my-[10px]">
              <strong>3.2.3.</strong>{" "}
              <a href="/" className="text-link underline">
                Premium
              </a>{" "}
            </p>
            <p className="my-[10px]">
              <strong>3.2.4.</strong>{" "}
              <a href="/" className="text-link underline">
                Ad limit
              </a>{" "}
            </p>
            <p className="my-[10px]">
              <strong>3.2.5.</strong>{" "}
              <a href="/" className="text-link underline">
                Repeat announcement
              </a>{" "}
            </p>
            <p className="my-[10px]">
              <strong>3.2.6.</strong>{" "}
              <a href="/" className="text-link underline">
                SMS PIN
              </a>{" "}
            </p>
            <p className="my-[10px]">
              <strong>3.2.7.</strong>{" "}
              <a href="/" className="text-link underline">
                Ad restoration
              </a>{" "}
            </p>
            <p className="my-[10px]">
              <strong>3.3.</strong> The prices for services, as well as the
              procedure for ordering paid services, are shown on the relevant
              pages of the Service.
            </p>
            <p className="my-[10px]">
              <strong>3.4.</strong> The Service User who has paid for the
              services of the Service has the right to apply to the
              Administration with a request to return the tools. The decision to
              return or refuse to return funds is made unilaterally by the
              Administration.
            </p>
            <p className="my-[10px]">
              <strong>3.5.</strong> The Administration has the right to refuse
              to return funds to the User in these cases, if:
            </p>
            <p className="my-[10px]">
              <strong>3.5.1.</strong> The User regularly violates the terms of
              this Agreement.
            </p>
            <p className="my-[10px]">
              <strong>3.5.2.</strong> If the service is activated, as well as in
              cases, if the ad is deleted after moderation.
            </p>
            <p className="my-[10px]">
              <strong>3.5.3.</strong> In case of any malfunctions in the payment
              system. The Service is not responsible for the operation of the
              payment systems that pay for the Service services through the
              Users. In this case, the issue of the return of funds is resolved
              individually.
            </p>
            <p className="my-[10px]">
              <strong>3.5.4.</strong> In other cases, according to the decision
              of the Administration.
            </p>
            <p className="my-[10px]">
              <strong>3.6.</strong> Refunds will be credited to the user's
              account within 30 days.
            </p>
          </section>

          {/* Description */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">4. Bonuses</h2>
            <p className="my-[10px]">
              <strong>4.1.</strong> Bonuses — funds in the Personal account at
              Turbo.az and intended for use only within the site. Bonuses cannot
              be exchanged/exchanged for their cash equivalent or transferred to
              third parties.
            </p>
            <p className="my-[10px]">
              <strong>4.2.</strong> Bonuses within the package — are transferred
              to the balance of the Package after the invoice is paid. The
              period of activity of bonuses is equal to the period of activity
              of the package.
            </p>
            <p className="my-[10px]">
              <strong>4.3.</strong> Gift bonuses — are transferred to the Bonus
              balance at the initiative of the Administration. The duration of
              the activity is determined by the Administration.
            </p>
            <p className="my-[10px]">
              <strong>4.4.</strong> Main balance — funds in the Personal account
              at Turbo.az that can be increased by the User using one of the
              possible methods (bank card, PulPal, Portmanat, payment terminal).
            </p>
          </section>

          {/* Means of Communication */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">5. Communication</h2>
            <p className="my-[10px]">
              <strong>5.1.</strong> The Administration has the right to send
              e-mails and/or short messages (SMS messages) to the e-mail
              addresses or phone numbers specified by the Users. Messages from
              the Service may be published on the Service.
            </p>
            <p className="my-[10px]">
              <strong>5.2.</strong> The User understands, accepts, and agrees
              that such letters and messages may contain, but are not limited
              to: offers, offers, and other informational and/or advertising
              messages.
            </p>
            <p className="my-[10px]">
              <strong>5.3.</strong> Messages published on the Service are
              considered delivered to the User from the moment of their
              publication.
            </p>
          </section>
          {/* Amending the ad */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">6. Software</h2>
            <p className="my-[10px]">
              <strong>6.1.</strong> The Administration is the exclusive owner of
              the domain name on which the site is hosted, the site itself,
              mobile applications, as well as all Service and all software of
              the Service.
            </p>
            <p className="my-[10px]">
              <strong>6.2.</strong> When downloading the software, the
              Administration grants the User a personal free ordinary license to
              use the software, without the right to assign it to third parties.
            </p>
            <p className="my-[10px]">
              <strong>6.3.</strong> According to the functions of the Service,
              such a license is intended to provide the User with the
              opportunity to use the services of the Service and receive
              benefits from them.
            </p>
            <p className="my-[10px]">
              <strong>6.4.</strong> Copying, changing, sharing, selling
              (realizing), exchanging, or renting all or any part of the
              intellectual property objects of the Administration (including the
              software), as well as "hacking" the source code of the software
              without the written permission of the Administration, is
              prohibited.
            </p>
          </section>
          {/*Black list */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">7. Limitation of Liability</h2>
            <p className="my-[10px]">
              <strong>7.1.</strong> All information provided by the User on the
              Service (including personal data) is placed by the User for the
              sale (realization) of his NV.
            </p>
            <p className="my-[10px]">
              <strong>7.2.</strong> The User posts this or that information
              about himself only in his own interests, including to simplify the
              establishment of contact with the User and/or to identify the
              User.
            </p>
            <p className="my-[10px]">
              <strong>7.3.</strong> By placing information about himself, the
              User understands and agrees that such information is placed on the
              Service in open access, that is, it is available to any customer
              or Users of the Service for familiarization.
            </p>
            <p className="my-[10px]">
              <strong>7.4.</strong> The user understands and assumes all risks
              associated with such posting of information, including, but not
              limited to: spam - the risk of the e-mail address falling into
              mailing lists, the risk of the e-mail address falling into various
              types of fraudsters.
            </p>
            <p className="my-[10px]">
              <strong>7.5.</strong> The Service is not an organizer, broker,
              buyer, or seller of agreements on NV.
            </p>
            <p className="my-[10px]">
              <strong>7.6.</strong> The Service is not responsible for the
              conclusion and execution (implementation) of agreements by the
              Users of the Service, for damages, lost benefits, income,
              financial losses, or indirect, actual, extraneous, or punitive
              damages caused as a result of the conclusion of agreements.
            </p>
            <p className="my-[10px]">
              <strong>7.7.</strong> By using the services of the Service, the
              User confirms his agreement with it, that he uses the Service
              under his own responsibility, bears all the risks related to the
              use of advertisements placed on the Service.
            </p>
            <p className="my-[10px]">
              <strong>7.8.</strong> The Service is a tool that allows Users to
              post ads about Goods whose realization (sale) and/or acquisition
              is permitted by law, this Agreement, and other rules of using the
              Service.
            </p>
          </section>
          {/* Car dealerships and other persons engaged in commercial activities */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">
              8. Duration of the Terms of Use
            </h2>
            <p className="my-[10px]">
              <strong>8.1.</strong> The current agreement comes into force from
              the moment the User starts using the Service, regardless of the
              fact of the User's registration or posting of an ad on the
              Service, and is valid indefinitely.
            </p>
            <p className="my-[10px]">
              <strong>8.2.</strong> The user has the right to terminate his
              right to use the services of the Service at any time. After that,
              the User does not have the right to post new Ads.
            </p>
            <p className="my-[10px]">
              <strong>8.3.</strong> The Service reserves the right to terminate
              the User's access at its sole discretion. The User whose access to
              the Services is suspended or whose data is not authentic does not
              have the right to re-register without the special permission of
              the Administration.
            </p>
          </section>
          {/* Technical support service */}
          <section className="my-[10px]">
            <h2 className="font-bold my-[10px]">9. Other Terms</h2>
            <p className="my-[10px]">
              <strong>9.1.</strong> In case of disputes, the parties to this
              Agreement undertake to resolve them through negotiations. Disputes
              arising during the performance of this Agreement and the provision
              of Services shall be resolved in accordance with applicable law.
            </p>
            <p className="my-[10px]">
              <strong>9.2.</strong> The legislation of the Republic of
              Azerbaijan applies to all disputes.
            </p>
            <p className="my-[10px]">
              <strong>9.3.</strong> The Service reserves the right to change
              this Agreement unilaterally and without notice to Users. The new
              wording of the Agreement takes effect from the date of its
              publication on the Service.
            </p>
            <p className="my-[10px]">
              <strong>9.4.</strong> Nothing in the Agreement shall be understood
              or interpreted as establishing agency relations, partnership
              relations, joint activity relations, personal employment
              relations, or any other relations not expressly provided for in
              the Agreement between the User and the Administration.
            </p>
            <p className="my-[10px]">
              <strong>9.5.</strong> The finding by a court of any provision of
              the Agreement as invalid or unenforceable shall not result in the
              invalidity of other provisions of the Agreement.
            </p>
            <p className="my-[10px]">
              <strong>9.6.</strong> In case of violation of the provisions of
              the Agreement by any of the Users, inaction by the Administration
              does not deprive the Administration of the right to initiate
              actions corresponding to the protection of its interests and
              rights.
            </p>
            <p className="my-[10px]">
              <strong>9.7.</strong> All other terms and conditions not provided
              for in this Agreement are regulated separately.
            </p>
            <br />
            <p className="my-[10px]">
              <strong>
                {" "}
                The user confirms that he has familiarized himself with all
                clauses of the current Agreement and accepts them without words
                in their entirety.
              </strong>
            </p>
            <br />
            <p className="my-[10px]">Addendums:</p>
            <br />
            <p className="my-[10px]">
              <strong>1.</strong>{" "}
              <a href="/" className="text-link underline">
                https://kibcar.com Addendum No. 1 to the User Agreement
              </a>
            </p>{" "}
            <br />
          </section>
          <p className="my-[10px]">Last update date – 11.09.2024</p>
        </div>
      </div>
    </div>
  );
}

export default Terms;
