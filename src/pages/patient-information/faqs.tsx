import { CommonHero } from '@/CommonHero';
import { Faq } from '@/Faq';
import { flexCenter } from '@/layout/styles/classes';
import { SingleQ } from '@/SingleQ';
import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';
import { Fragment } from 'react';

const Hero = styled(CommonHero)`
    > div {
        :first-of-type {
            margin-bottom: 32px;

            > p {
                max-width: 600px;
            }
        }

        :last-of-type {
            max-width: 600px;
        }
    }

    @media (min-width: 1024px) {
        ${flexCenter};

        > div {
            :first-of-type {
                margin-bottom: 0;
                margin-right: 3.33vw; //64px at 1920p
            }

            :last-of-type {
                max-width: 715px;
            }
        }
    }
`;

const FAQS: Page = () => (
    <Fragment>
        <Hero>
            <div>
                <h1>FAQs</h1>

                <p>
                    Below are some of the most frequently asked questions patients have about
                    dentistry and oral health issues. <br /> If you have any other questions, or
                    would like to schedule an appointment, we would love to hear from you.
                </p>
            </div>
            <StaticImage src="../../../assets/images/faq-hero.svg" alt="faq illustration" />
        </Hero>
        <Faq>
            <SingleQ question="What Should I Do If I Have Bad Breath?">
                <p>
                    Bad breath (halitosis) can be an unpleasant and embarrassing condition. Many of
                    us may not realize that we have bad breath, but everyone has it from time to
                    time, especially in the morning.
                </p>
                <p>
                    There are various reasons one may have bad breath, but in healthy people, the
                    major reason is due to microbial deposits on the tongue, especially the back of
                    the tongue. Some studies have shown that simply brushing the tongue reduced bad
                    breath by as much as 70 percent.
                </p>
                <p>
                    <em>What may cause bad breath?</em>
                </p>

                <ul>
                    <li>
                        <strong>Morning time</strong> – Saliva flow almost stops during sleep and
                        its reduced cleansing action allows bacteria to grow, causing bad breath.
                    </li>
                    <li>
                        <strong>Certain foods</strong> – Garlic, onions, etc. Foods containing
                        odor-causing compounds enter the blood stream; they are transferred to the
                        lungs, where they are exhaled.
                    </li>
                    <li>
                        <strong>Poor oral hygiene habits</strong> – Food particles remaining in the
                        mouth promote bacterial growth.
                    </li>
                    <li>
                        <strong>Periodontal (gum) disease</strong> – Colonies of bacteria and food
                        debris residing under inflamed gums.
                    </li>
                    <li>
                        <strong>Dental cavities and improperly fitted dental appliances</strong> –
                        May also contribute to bad breath.
                    </li>
                    <li>
                        <strong>Dry mouth (Xerostomia)</strong> – May be caused by certain
                        medications, salivary gland problems, or continuous mouth breathing.
                    </li>
                    <li>
                        <strong>Tobacco products</strong> – Dry the mouth, causing bad breath.
                    </li>
                    <li>
                        <strong>Dieting</strong> – Certain chemicals called ketones are released in
                        the breath as the body burns fat.
                    </li>
                    <li>
                        <strong>Dehydration, hunger, and missed meals</strong> – Drinking water and
                        chewing food increases saliva flow and washes bacteria away.
                    </li>
                    <li>
                        <strong>Certain medical conditions and illnesses</strong> – Diabetes, liver
                        and kidney problems, chronic sinus infections, bronchitis, and pneumonia are
                        several conditions that may contribute to bad breath.
                    </li>
                </ul>
                <p>
                    Keeping a record of what you eat may help identify the cause of bad breath.
                    Also, review your current medications, recent surgeries, or illnesses with you
                    dentist.
                </p>

                <p>
                    <em>What can I do to prevent bad breath?</em>
                </p>

                <ul>
                    <li>
                        <strong>Practice good oral hygiene</strong> – Brush at least twice a day
                        with an ADA approved fluoride toothpaste and toothbrush. Floss daily to
                        remove food debris and plaque from in between the teeth and under the
                        gumline. Brush or use a tongue scraper to clean the tongue and reach the
                        back areas. Replace your toothbrush every 2 to 3 months. If you wear
                        dentures or removable bridges, clean them thoroughly and place them back in
                        your mouth in the morning.
                    </li>
                    <li>
                        <strong>See your dentist regularly</strong> – Get a check-up and cleaning at
                        least twice a year. If you have or have had periodontal disease, your
                        dentist will recommend more frequent visits.
                    </li>
                    <li>
                        <strong>Stop smoking/chewing tobacco</strong> – Ask your dentist what they
                        recommend to help break the habit.
                    </li>
                    <li>
                        <strong>Drink water frequently</strong> – Water will help keep your mouth
                        moist and wash away bacteria.
                    </li>
                    <li>
                        <strong>Use mouthwash/rinses</strong> – Some over-the-counter products only
                        provide a temporary solution to mask unpleasant mouth odor. Ask your dentist
                        about antiseptic rinses that not only alleviate bad breath, but also kill
                        the germs that cause the problem.
                    </li>
                </ul>
                <p>
                    In most cases, your dentist can treat the cause of bad breath. If it is
                    determined that your mouth is healthy, but bad breath is persistent, your
                    dentist may refer you to your physician to determine the cause of the odor and
                    an appropriate treatment plan.
                </p>
            </SingleQ>
            <SingleQ question="How Often Should I Brush And Floss?">
                <p>
                    Brushing and flossing help control the plaque and bacteria that cause dental
                    disease.
                </p>

                <p>
                    Plaque is a film of food debris, bacteria, and saliva that sticks to the teeth
                    and gums. The bacteria in plaque convert certain food particles into acids that
                    cause tooth decay. Also, if plaque is not removed, it turns into calculus
                    (tartar). If plaque and calculus are not removed, they begin to destroy the gums
                    and bone, causing periodontal (gum) disease.
                </p>

                <p>
                    Plaque formation and growth is continuous and can only be controlled by regular
                    brushing, flossing, and the use of other dental aids.
                </p>

                <p>
                    <strong>Toothbrushing</strong> – Brush your teeth at least twice a day
                    (especially before going to bed at night) with an ADA approved soft bristle
                    brush and toothpaste.
                </p>

                <ul>
                    <li>
                        Brush at a 45 degree angle to the gums, gently using a small, circular
                        motion, ensuring that you always feel the bristles on the gums.
                    </li>
                    <li>Brush the outer, inner, and biting surfaces of each tooth.</li>
                    <li>Use the tip of the brush head to clean the inside of front teeth.</li>
                    <li>Brush your tongue to remove bacteria and freshen your breath.</li>
                </ul>
                <p>
                    Electric toothbrushes are also recommended. They are easy to use and can remove
                    plaque efficiently. Simply place the bristles of the electric brush on your gums
                    and teeth and allow the brush to do its job, several teeth at a time.
                </p>

                <p>
                    <strong>
                        Flossing – <em>Daily flossing</em>
                    </strong>{' '}
                    is the best way to clean between the teeth and under the gumline. Flossing not
                    only helps clean these spaces, it disrupts plaque colonies from building up,
                    preventing damage to the gums, teeth, and bone.
                </p>

                <ul>
                    <li>
                        Take 12-16 inches (30-40cm) of dental floss and wrap it around your middle
                        fingers, leaving about 2 inches (5cm) of floss between the hands.
                    </li>
                    <li>
                        Using your thumbs and forefingers to guide the floss, gently insert the
                        floss between teeth using a sawing motion.
                    </li>
                    <li>
                        Curve the floss into a “C” shape around each tooth and under the gumline.
                        Gently move the floss up and down, cleaning the side of each tooth.
                    </li>
                </ul>

                <p>
                    Floss holders are recommended if you have difficulty using conventional floss.
                </p>

                <p>
                    Rinsing – It is important to rinse your mouth with water after brushing, and
                    also after meals if you are unable to brush. If you are using an
                    over-the-counter product for rinsing, it’s a good idea to consult with your
                    dentist or dental hygienist on its appropriateness for you.
                </p>
            </SingleQ>
            <SingleQ question="How Often Should I Have A Dental Exam And Cleaning?">
                <p>
                    You should have your teeth checked and cleaned at least twice a year, though
                    your dentist or dental hygienist may recommend more frequent visits.
                </p>

                <p>
                    Regular dental exams and cleaning visits are essential in preventing dental
                    problems and maintaining the health of your teeth and gums. At these visits,
                    your teeth are cleaned and checked for cavities. Additionally, there are many
                    other things that are checked and monitored to help detect, prevent, and
                    maintain your dental health. These include:
                </p>
                <ul>
                    <li>
                        <strong>Medical history review:</strong> Knowing the status of any current
                        medical conditions, new medications, and illnesses, gives us insight to your
                        overall health and also your dental health.
                    </li>
                    <li>
                        <strong>Examination of diagnostic x-rays (radiographs):</strong> Essential
                        for detection of decay, tumors, cysts, and bone loss. X-rays also help
                        determine tooth and root positions.
                    </li>
                    <li>
                        <strong>Oral cancer screening:</strong> Check the face, neck, lips, tongue,
                        throat, tissues, and gums for any signs of oral cancer.
                    </li>
                    <li>
                        <strong>Gum disease evaluation:</strong> Check the gums and bone around the
                        teeth for any signs of periodontal disease.
                    </li>
                    <li>
                        <strong>Examination of tooth decay:</strong> All tooth surfaces will be
                        checked for decay with special dental instruments.
                    </li>
                    <li>
                        <strong>Examination of existing restorations:</strong> Check current
                        fillings, crowns, etc.
                    </li>
                    <li>
                        <strong>Removal of calculus (tartar):</strong> Calculus is hardened plaque
                        that has been left on the tooth for sometime and is now firmly attached to
                        the tooth surface. Calculus forms above and below the gum line, and can only
                        be removed with special dental instruments.
                    </li>
                    <li>
                        <strong>Removal of plaque:</strong> Plaque is a sticky, almost invisible
                        film that forms on the teeth. It is a growing colony of living bacteria,
                        food debris, and saliva. The bacteria produce toxins (poisons) that inflame
                        the gums. This inflammation is the start of periodontal disease!
                    </li>
                    <li>
                        <strong>Teeth polishing:</strong> Removes stain and plaque that is not
                        otherwise removed during toothbrushing and scaling.
                    </li>
                    <li>
                        <strong>Oral hygiene recommendations:</strong> Review and recommend oral
                        hygiene aids as needed (electric dental toothbrushes, special cleaning aids,
                        fluorides, rinses, etc.).
                    </li>
                    <li>
                        <strong>Review dietary habits:</strong> Your eating habits play a very
                        important role in your dental health.
                    </li>
                </ul>

                <p>
                    As you can see, a good dental exam and cleaning involves quite a lot more than
                    just checking for cavities and polishing your teeth. We are committed to
                    providing you with the best possible care, and to do so will require regular
                    check-ups and cleanings.
                </p>
            </SingleQ>
            <SingleQ question="How Can I Tell If I Have Gingivitis Or Periodontitis (Gum Disease)?">
                <p>
                    Four out of five people have periodontal disease and don’t know it! Most people
                    are not aware of it because the disease is usually painless in the early stages.
                    Unlike tooth decay, which often causes discomfort, it is possible to have
                    periodontal disease without noticeable symptoms. Having regular dental check-ups
                    and periodontal examinations are very important and will help detect if
                    periodontal problems exist.
                </p>
                <p>
                    Periodontal disease begins when plaque, a sticky, colorless, film of bacteria,
                    food debris, and saliva, is left on the teeth and gums. The bacteria produce
                    toxins (acids) that inflame the gums and slowly destroy the bone. Brushing and
                    flossing regularly and properly will ensure that plaque is not left behind to do
                    its damage.
                </p>
                <p>
                    Other than poor oral hygiene, there are several other factors that may increase
                    the risk of developing periodontal disease:
                </p>

                <ul>
                    <li>
                        <strong>Smoking or chewing tobacco</strong> – Tobacco users are more likely
                        than nonusers to form plaque and tartar on their teeth.
                    </li>
                    <li>
                        <strong>Certain tooth or appliance conditions</strong> – Bridges that no
                        longer fit properly, crowded teeth, or defective fillings that may trap
                        plaque and bacteria.
                    </li>
                    <li>
                        <strong>Many medications</strong> – Steroids, cancer therapy drugs, blood
                        pressure meds, oral contraceptives. Some medications have side affects that
                        reduce saliva, making the mouth dry and plaque easier to adhere to the teeth
                        and gums.
                    </li>
                    <li>
                        <strong>Pregnancy, oral contraceptives, and puberty</strong> – Can cause
                        changes in hormone levels, causing gum tissue to become more sensitive to
                        bacteria toxins.
                    </li>
                    <li>
                        <strong>Systemic diseases</strong> – Diabetes, blood cell disorders, HIV /
                        AIDS, etc.
                    </li>
                    <li>
                        <strong>Genetics may play role</strong> – Some patients may be predisposed
                        to a more aggressive type of periodontitis. Patients with a family history
                        of tooth loss should pay particular attention to their gums.
                    </li>
                </ul>

                <p>Signs and Symptoms of Periodontal Disease</p>

                <ul>
                    <li>
                        <strong>Red and puffy gums</strong> – Gums should never be red or swollen.
                    </li>
                    <li>
                        <strong>Bleeding gums</strong> – Gums should never bleed, even when you
                        brush vigorously or use dental floss.
                    </li>
                    <li>
                        <strong>Persistent bad breath</strong> – Caused by bacteria in the mouth.
                    </li>
                    <li>
                        <strong>New spacing between teeth</strong> – Caused by bone loss.
                    </li>
                    <li>
                        <strong>Loose teeth</strong> – Also caused by bone loss or weakened
                        periodontal fibers (fibers that support the tooth to the bone).
                    </li>
                    <li>
                        <strong>Pus around the teeth and gums</strong> – Sign that there is an
                        infection present.
                    </li>
                    <li>
                        <strong>Receding gums</strong> – Loss of gum around a tooth.
                    </li>
                    <li>
                        <strong>Tenderness or Discomfort</strong> – Plaque, calculus, and bacteria
                        irritate the gums and teeth.
                    </li>
                </ul>

                <p>
                    Good oral hygiene, a balanced diet, and regular dental visits can help reduce
                    your risk of developing periodontal disease.
                </p>
            </SingleQ>
            <SingleQ question="Why Is It Important To Use Dental Floss?">
                <p>
                    Brushing our teeth removes food particles, plaque, and bacteria from all tooth
                    surfaces, except in between the teeth. Unfortunately, our toothbrush can’t reach
                    these areas that are highly susceptible to decay and periodontal (gum) disease.
                </p>

                <p>
                    Daily flossing is the best way to clean between the teeth and under the gumline.
                    Flossing not only helps clean these spaces, it disrupts plaque colonies from
                    building up, preventing damage to the gums, teeth, and bone.
                </p>

                <p>
                    Plaque is a sticky, almost invisible film that forms on the teeth. It is a
                    growing colony of living bacteria, food debris, and saliva. The bacteria produce
                    toxins (acids) that cause cavities and irritate and inflame the gums. Also, when
                    plaque is not removed above and below the gumline, it hardens and turns into
                    calculus (tartar). This will further irritate and inflame the gums and also
                    slowly destroy the bone. This is the beginning of periodontal disease.
                </p>

                <p>How to floss properly:</p>

                <ul>
                    <li>
                        Take 12-16 inches (30-40cm) of dental floss and wrap it around your middle
                        fingers, leaving about 2 inches (5cm) of floss between the hands.
                    </li>
                    <li>
                        Using your thumbs and forefingers to guide the floss, gently insert the
                        floss between teeth using a sawing motion.
                    </li>
                    <li>
                        Curve the floss into a “C” shape around each tooth and under the gumline.
                        Gently move the floss up and down, cleaning the side of each tooth.
                    </li>
                </ul>

                <p>
                    Floss holders are recommended if you have difficulty using conventional floss.
                </p>

                <p>
                    <em>Daily flossing will help you keep a healthy, beautiful smile for life!</em>
                </p>
            </SingleQ>
            <SingleQ question="How Can Cosmetic Dentistry Help Improve The Appearance Of My Smile?">
                <p>
                    If you’re feeling somewhat self-conscious about your teeth, or just want to
                    improve your smile, cosmetic dental treatments may be the answer to a more
                    beautiful, confident smile.
                </p>

                <p>
                    Cosmetic dentistry has become very popular in the last several years, not only
                    due to the many advances in cosmetic dental procedures and materials available
                    today, but also because patients are becoming more and more focused on improving
                    their overall health. This includes dental prevention and having a healthier,
                    whiter, more radiant smile.
                </p>

                <p>
                    There are many cosmetic dental procedures available to improve your teeth and
                    enhance your smile. Depending on your particular needs, cosmetic dental
                    treatments can change your smile dramatically, from restoring a single tooth to
                    having a full mouth make-over. Ask your dentist how you can improve the health
                    and beauty of your smile with cosmetic dentistry.
                </p>

                <p>
                    <strong>Cosmetic Procedures:</strong>
                </p>

                <p>
                    <strong>Teeth Whitening:</strong> Bleaching lightens teeth that have been
                    stained or discolored by age, food, drink, and smoking. Teeth darkened as a
                    result of injury or taking certain medications can also be bleached, but the
                    effectiveness depends on the degree of staining present.
                </p>

                <p>
                    <strong>Composite (tooth-colored) Fillings:</strong> Also known as “bonding”,
                    composite fillings are now widely used instead of amalgam (silver) fillings to
                    repair teeth with cavities, and also to replace old defective fillings.
                    Tooth-colored fillings are also used to repair chipped, broken, or discolored
                    teeth. This type of filling is also very useful to fill in gaps and to protect
                    sensitive, exposed root surfaces caused by gum recession.
                </p>
                <p>
                    <strong>Porcelain Veneers:</strong> Veneers are thin custom-made, tooth-colored
                    shells that are bonded onto the fronts of teeth to create a beautiful individual
                    smile. They can help restore or camouflage damaged, discolored, poorly shaped,
                    or misaligned teeth. Unlike crowns, veneers require minimal tooth structure to
                    be removed from the surface of the tooth.
                </p>
                <p>
                    <strong>Porcelain Crowns (caps):</strong> A crown is a tooth-colored,
                    custom-made covering that encases the entire tooth surface restoring it to its
                    original shape and size. Crowns protect and strengthen teeth that cannot be
                    restored with fillings or other types of restorations. They are ideal for teeth
                    that have large, fractured or broken fillings and also for those that are badly
                    decayed.
                </p>
                <p>
                    <strong>Dental Implants:</strong> Dental implants are artificial roots that are
                    surgically placed into the jaw to replace one or more missing teeth. Porcelain
                    crowns, bridges, and dentures can be made specifically to fit and attach to
                    implants, giving a patient a strong, stable, and durable solution to removable
                    dental appliances.
                </p>
                <p>
                    <strong>Orthodontics:</strong> Less visible and more effective brackets and
                    wires are making straightening teeth with orthodontics much more appealing to
                    adult patients. Also, in some cases, teeth may be straightened with custom-made,
                    clear, removable aligners that require no braces.
                </p>
                <p>
                    <em>
                        Thanks to the advances in modern dentistry, cosmetic treatments can make a
                        difference in making your smile shine!
                    </em>
                </p>
            </SingleQ>
            <SingleQ question="What Are Porcelain Veneers And How Can They Improve My Smile?">
                <p>
                    Porcelain veneers are very thin shells of tooth-shaped porcelain that are
                    individually crafted to cover the fronts of teeth. They are very durable and
                    will not stain, making them a very popular solution for those seeking to restore
                    or enhance the beauty of their smile.
                </p>
                <p>
                    <strong>
                        Veneers may be used to restore or correct the following dental conditions:
                    </strong>
                </p>

                <ul>
                    <li>Severely discolored or stained teeth</li>
                    <li>Unwanted or uneven spaces</li>
                    <li>Worn or chipped teeth</li>
                    <li>Slight tooth crowding</li>
                    <li>Misshapen teeth</li>
                    <li>Teeth that are too small or large</li>
                </ul>

                <p>
                    Getting veneers usually requires two visits. Veneers are created from an
                    impression (mold) of your teeth that is then sent to a professional dental
                    laboratory where each veneer is custom-made (for shape and color) for your
                    individual smile.
                </p>
                <p>
                    With little or no anesthesia, teeth are prepared by lightly buffing and shaping
                    the front surface of the teeth to allow for the small thickness of veneers. The
                    veneers are carefully fitted and bonded onto the tooth surface with special
                    bonding cements and occasionally a specialized light may be used to harden and
                    set the bond.
                </p>
                <p>
                    Veneers are an excellent dental treatment that can dramatically improve your
                    teeth and give you a natural, beautiful smile.
                </p>
            </SingleQ>
            <SingleQ question="What Can I Do About Stained Or Discolored Teeth?">
                <p>
                    Since teeth whitening has now become the number one aesthetic concern of many
                    patients, there are many products and methods available to achieve a brighter
                    smile.
                </p>

                <p>
                    Professional teeth whitening (or bleaching) is a simple, non-invasive dental
                    treatment used to change the color of natural tooth enamel, and is an ideal way
                    to enhance the beauty of your smile. Over-the-counter products are also
                    available, but they are much less effective than professional treatments and may
                    not be approved by the American Dental Association (ADA).
                </p>

                <p>
                    As we age, the outer layer of tooth enamel wears away, eventually revealing a
                    darker or yellow shade. The color of our teeth also comes from the inside of the
                    tooth, which may become darker over time. Smoking, drinking coffee, tea, and
                    wine may also contribute to tooth discoloration, making our teeth yellow and
                    dull. Sometimes, teeth can become discolored from taking certain medications as
                    a child, such as tetracycline. Excessive fluoridation (fluorosis) during tooth
                    development can also cause teeth to become discolored.
                </p>

                <p>
                    It’s important to have your teeth evaluated by your dentist to determine if
                    you’re a good candidate for bleaching. Occasionally, tetracycline and fluorosis
                    stains are difficult to bleach and your dentist may offer other options, such as
                    veneers or crowns to cover up such stains. Since teeth whitening only works on
                    natural tooth enamel, it is also important to evaluate replacement of any old
                    fillings, crowns, etc. before bleaching begins. Once the bleaching is done, your
                    dentist can match the new restorations to the shade of the newly whitened teeth.
                </p>

                <p>
                    Since teeth whitening is not permanent, a touch-up may be needed every several
                    years to keep your smile looking bright.
                </p>

                <p>
                    <strong>The most widely used professional teeth whitening systems:</strong>
                </p>

                <p>
                    <strong>Home teeth whitening systems:</strong> At-home products usually come in
                    a gel form that is placed in a custom-fitted mouthguard (tray), created from a
                    mold of your teeth. The trays are worn either twice a day for approximately 30
                    minutes, or overnight while you sleep. It usually takes several weeks to achieve
                    the desired results depending on the degree of staining and the desired level of
                    whitening.
                </p>

                <p>
                    <strong>In office teeth whitening:</strong> This treatment is done in the dental
                    office and you will see results immediately. It may require more than one visit,
                    with each visit lasting 30 to 60 minutes. While your gums are protected, a
                    bleaching solution is applied to the teeth. A special light may be used to
                    enhance the action of the agent while the teeth are whitened.
                </p>

                <p>
                    Some patients may experience tooth sensitivity after having their teeth
                    whitened. This sensation is temporary and subsides shortly after you complete
                    the bleaching process, usually within a few days to one weak.
                </p>

                <p>
                    <strong>
                        Teeth whitening can be very effective and can give you a brighter, whiter,
                        more confident smile!
                    </strong>
                </p>
            </SingleQ>
            <SingleQ question="What Are My Options If I Have Missing Teeth?">
                <p>
                    With many state-of-the-art dental treatments and prevention options available in
                    dentistry today, there are fewer reasons for having to extract (remove) teeth.
                    When something does go wrong with a tooth, we try to do everything possible to
                    restore the tooth to its original function. Removing a tooth is the last option
                    because we know that removal may lead to severe and costly dental and cosmetic
                    problems if the tooth is not replaced.
                </p>

                <p>
                    Losing a tooth can be a very traumatic experience and it’s very unfortunate when
                    it does happen. Injury, accident, fracture, severe dental decay, and gum disease
                    are the major reasons for having to remove a tooth. If teeth are lost due to
                    injury or have to be removed, it is imperative that they be replaced to avoid
                    cosmetic and dental problems in the future.
                </p>

                <p>
                    When a tooth is lost, the jaw bone that helped to support that tooth begins to
                    atrophy, causing the teeth on either side to shift or tip into the open space of
                    the lost tooth. Also, the tooth above or below the open space will start to move
                    towards the open space because there is no opposing tooth to bite on. These
                    movements may create problems such as decay, gum disease, excessive wear on
                    certain teeth, and TMJ (jaw joint) problems. These problems and movements do not
                    result immediately, but will eventually appear, compromising your chewing
                    abilities, the health of your bite, and the beauty of your smile.
                </p>

                <p>
                    <strong>Options for replacement of missing teeth:</strong>
                </p>

                <p>
                    <strong>Removable bridges</strong> - This type of bridge is a good solution for
                    replacing one or more missing teeth, especially in complex dental situations
                    where other replacement options are not possible. They are usually made of
                    tooth-colored, artificial teeth combined with metal clasps that hook onto
                    adjacent natural teeth. Removable bridges are the most economical option for
                    replacing missing teeth, but may be the least aesthetically pleasing. This is
                    because the metal clasps on the appliances are often impossible to completely
                    conceal.
                </p>

                <p>
                    <strong>Fixed bridges</strong> - This type of bridge is generally made of
                    porcelain or composite material and is anchored (cemented) permanently to a
                    natural teeth adjacent to the missing tooth site. The benefit of this type of
                    bridge is that it is fixed (not removable) and it is very sturdy. The
                    disadvantage is that in order to create a fixed appliance, two healthy, natural
                    teeth will have to be crowned (capped) to hold the bridge in place.
                </p>

                <p>
                    <strong>Dentures</strong> - This type of tooth replacement is used when most or
                    all of the natural teeth are missing in one dental arch. Dentures are removable
                    artificial teeth that are made to closely resemble the patients’ original teeth.
                </p>

                <p>
                    <strong>Implants</strong> - Are a great way to replace one or more missing
                    teeth. They may also be great to support ill fitting dentures. A dental implant
                    is an artificial root that is surgically placed into the jaw bone to replace a
                    missing tooth. An artificial tooth is placed on the implant, giving the
                    appearance and feel of a natural tooth. Implants are very stable, durable, and
                    are the most aesthetically pleasing tooth replacement option.
                </p>

                <p>
                    <em>
                        If you are missing teeth, ask us if they need replacement and what options
                        are available to you. Together we will select the best replacement option
                        for your particular case. Prevention and early treatment is always less
                        involved and less costly than delaying treatment and allowing a serious
                        problem to develop.
                    </em>
                </p>
            </SingleQ>
            <SingleQ question="What Can Be Done About Old, Unattractive, Or Discolored Fillings?">
                <p>
                    Most of us have fillings in our mouths that date back many years and some may
                    have even been placed during our childhood. These fillings may now be old, dark,
                    and unattractive, making us feel self-conscious when we smile, laugh, and talk.
                    Old fillings are not only unattractive, they may also be defective. When a
                    filling is old, the margins (space between the tooth and filling) may eventually
                    open and allow bacteria and food debris to enter, potentially causing dental
                    decay.
                </p>

                <p>
                    Your dentist can check your fillings and evaluate if they are defective and need
                    replacement. Also, if you simply want to replace fillings that are unattractive,
                    you and your dentist can decide which ones should be replaced first and what
                    replacement options would best suit you. There are many state-of-the-art dental
                    filling materials and procedures available today that are quick, painless, and
                    cost effective for replacing old, unattractive or defective fillings.
                </p>

                <p>
                    <strong>
                        Options for replacing old, unattractive, or discolored fillings:
                    </strong>
                </p>

                <p>
                    <strong>Composite (bonding) fillings</strong> - These are tooth-colored fillings
                    that can be closely matched to the color of your existing teeth. They are
                    particularly well suited for use in front teeth or visible parts of teeth and
                    are one of the best ways to improve the health and beauty of your smile.
                </p>

                <p>
                    <strong>Crowns (Caps)</strong> - These types of restoration are used when a
                    tooth is too damaged and cannot be repaired with a filling or other type of
                    restoration. A crown is a covering that encases the entire tooth surface
                    restoring it to its original shape and size. A crown protects and strengthens
                    the remaining tooth structure and can be made of gold, porcelain, and other
                    tooth-colored materials.
                </p>

                <p>
                    <strong>Inlays/Onlays</strong> - These restorations are custom made fillings.
                    They can be made of composite resin, porcelain or gold and are made by a dental
                    laboratory and placed by a dentist. Inlays/onlays are usually best for the
                    posterior chewing surfaces of teeth and are utilized to conservatively repair
                    teeth that have large defective/unattractive fillings or have been damaged by
                    decay or trauma.
                </p>

                <p>
                    <strong>Porcelain veneers</strong> - Used primarily in the front teeth, veneers
                    are very thin shells of tooth-shaped porcelain that are individually crafted and
                    permanently cemented to the front surface of teeth. They are a great solution
                    for fixing discolored, pitted, chipped, malformed, or slightly crooked teeth.
                    Veneers are also used if you have unwanted spaces. Veneers are very durable,
                    natural looking, and do not stain. This makes veneers a very popular solution
                    for restoring a smile impaired by old, unattractive fillings.
                </p>

                <p>
                    <em>
                        As you can see, there are various options for replacing old, unattractive
                        fillings. These treatments will provide strong, natural, and long-lasting
                        replacement solutions to enhance the health and beauty of your smile.
                    </em>
                </p>
            </SingleQ>
            <SingleQ question="What Does Heart Disease And Other Medical Conditions Have To Do With Periodontal (Gum) Disease?">
                <p>
                    Many people are unaware that having periodontal disease (the destruction of gum
                    tissue and bone that hold our teeth in place) can affect your overall health.
                    Periodontal disease is one of the most common infections; often more prevalent
                    than the common cold! Periodontal disease is not only the number one reason
                    people lose teeth; it can also affect the health of your body!
                </p>

                <p>
                    Periodontal disease is a bacterial infection, and in its earliest stages, it’s
                    called gingivitis. It starts when an accumulation of plaque (a colony of
                    bacteria, food debris, and saliva) is NOT regularly removed from the gums and
                    teeth. The bacteria in plaque produce toxins/acids that irritate and infect the
                    gums and eventually destroy the jaw bone that supports the teeth. When
                    periodontal disease is not treated it can eventually lead to tooth loss!
                </p>

                <p>
                    There are numerous studies that have looked into the correlation between gum
                    disease and major medical conditions. These studies suggest people with
                    periodontal disease are at a greater risk of systemic disease and indicate that
                    periodontal disease may cause oral bacteria to enter the bloodstream and travel
                    to major organs and begin new infections. Research suggests that periodontal
                    bacteria in the blood stream may:
                </p>

                <ul>
                    <li>Contribute to the development of heart disease</li>
                    <li>Increase the risk of stroke</li>
                    <li>
                        Compromise the health of those that have diabetes or respiratory diseases
                    </li>
                    <li>Increase a woman’s risk of having a preterm, low-birth weight baby</li>
                </ul>
                <p>
                    Researchers conclude there is still much research to be done to understand the
                    link between periodontal disease and systemic diseases, but enough research has
                    been done to support that infections in the mouth can play havoc elsewhere in
                    the body.
                </p>

                <p>
                    To ensure a healthy, disease-free mouth, we recommend the importance of regular
                    dental check-ups and cleanings, which include a periodontal evaluation. Also,
                    diligent home care and a proper diet can help reduce the plaque and bacteria in
                    the mouth.
                </p>

                <p>
                    <em>
                        Remember….the mouth body connection! Taking care of your oral health may
                        contribute to your overall medical health!
                    </em>
                </p>
            </SingleQ>
            <SingleQ question="What Should I Do If A Tooth Is Knocked Out?">
                <p>
                    We’re all at risk for having a tooth knocked out. More than 5 million teeth are
                    knocked out every year! If we know how to handle this emergency situation, we
                    may be able to actually save the tooth. Teeth that are knocked out may be
                    possibly reimplanted if we act quickly, yet calmly, and follow these simple
                    steps:
                </p>

                <ol>
                    <li>
                        <strong>Locate the tooth and handle it only by the crown</strong> (chewing
                        part of the tooth), NOT by the roots.
                    </li>
                    <li>
                        <strong>DO NOT scrub or use soap or chemicals to clean the tooth.</strong>{' '}
                        If it has dirt or debris on it, rinse it gently with your own saliva or
                        whole milk. If that is not possible, rinse it very gently with water.
                    </li>
                    <li>
                        <strong>Get to a dentist within 30 minutes.</strong> The longer you wait,
                        the less chance there is for successful reimplantation.
                    </li>
                </ol>

                <p>
                    <strong>Ways to transport the tooth</strong>
                </p>

                <ul>
                    <li>
                        Try to replace the tooth back in its socket immediately. Gently bite down on
                        gauze, a wet tea bag or on your own teeth to keep the tooth in place. Apply
                        a cold compress to the mouth for pain and swelling as needed.
                    </li>
                    <li>
                        If the tooth cannot be placed back into the socket, place the tooth in a
                        container and cover with a small amount of your saliva or whole milk. You
                        can also place the tooth under your tongue or between your lower lip and
                        gums. Keep the tooth moist at all times.{' '}
                        <em>Do not transport the tooth in a tissue or cloth.</em>
                    </li>
                    <li>
                        Consider buying a “Save-A-Tooth” storage container and keeping it as part of
                        your home first aid kit. The kit is available in many pharmacies and
                        contains a travel case and fluid solution for easy tooth transport.
                    </li>
                </ul>
                <p>
                    <em>
                        The sooner the tooth is replaced back into the socket, the greater the
                        likelihood it has to survive and possibly last for many years. So be
                        prepared, and remember these simple steps for saving a knocked-out tooth.
                    </em>
                </p>

                <p>
                    <strong>You can prevent broken or knocked-out teeth by:</strong>
                </p>

                <ul>
                    <li>Wearing a mouthguard when playing sports</li>
                    <li>Always wearing your seatbelt</li>
                    <li>Avoiding fights</li>
                    <li>
                        Avoid chewing hard items such as ice, popcorn kernels, hard breads, etc.
                    </li>
                </ul>
            </SingleQ>
            <SingleQ question="Why Straighten Teeth?">
                <p>
                    Straighter teeth perform chewing, biting and speaking functions more effectively
                    than crooked teeth. In addition, a straight smile boosts confidence, is
                    aesthetically pleasing to look at, and can help stave off a wide variety of
                    dental ailments.
                </p>
                <p>
                    There are several types of malocclusion including overbite, underbite,
                    crossbite, and overcrowding. Each of these alignment problems negatively impacts
                    the functionality and cosmetic appearance of the teeth.
                </p>
                <p>
                    Here is a brief overview of some of the main disorders associated with crooked
                    teeth:
                </p>
                <p>
                    <strong>Periodontitis</strong> – Periodontitis or gum disease begins with a
                    bacterial infection. The bacterial infection is caused by inadequate oral
                    hygiene. Crooked teeth are hard to clean effectively, which means that debris,
                    plaque and bacteria can build up in hard-to-reach areas. Straight teeth are much
                    easier to clean and are at less risk of contracting gum disease.
                </p>
                <p>
                    <strong>Temporomandibular Disorder (TMJ)</strong> - Crooked teeth can lead to
                    improper jaw alignment, which in turn causes a painful condition known as TMJ.
                    Severe headaches, jaw pain, lockjaw and the grinding of teeth characterize this
                    debilitating disorder.
                </p>
                <p>
                    <strong>Tooth injury</strong> – Straight teeth creates a strong wall, which
                    means injuries are less likely to occur. Crooked teeth are weaker and often
                    protrude, making them far more vulnerable to external injury.
                </p>
                <p>
                    <strong>Uneven wear</strong> – Crooked teeth cause some of the teeth to work
                    harder than others when biting and chewing. Straight teeth share the workload
                    evenly, meaning less risk of injury and better aesthetics.
                </p>
                <p>
                    Teeth can be straightened using either orthodontic braces or customized aligning
                    trays. Orthodontic braces are usually affixed to the teeth for a set duration.
                    The brackets and archwires are tightened regularly by the orthodontist and
                    removed when treatment is complete. Fixed braces can be placed on the front side
                    or back side of the teeth and are effective for most types of malocclusion.
                </p>
                <p>
                    Aligning trays are fully removable and are used where the malocclusion is less
                    severe, and the teeth need to move a shorter distance. These trays are replaced
                    every few weeks for the duration of the treatment, and have proven to be equally
                    effective for straightening teeth.
                </p>
                <p>
                    If you have questions about orthodontics and straightening teeth, please ask
                    your orthodontist.
                </p>
            </SingleQ>
        </Faq>
    </Fragment>
);

export default FAQS;
