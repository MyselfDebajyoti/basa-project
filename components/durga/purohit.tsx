import Image from "next/image";
import { cn } from "@/lib/utils";

type PurohitMoshaiProps = {
  className?: string;
};

export function PurohitMoshai({ className }: PurohitMoshaiProps) {
  return (
    <section className={cn("space-y-6   bg-background p-6", className)}>
      <header className="space-y-2">
        <h2 className="text-3xl font-semibold text-[color:var(--brand-text)] text-balance">
          Our Purohit Moshai
        </h2>
      </header>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <figure className="overflow-hidden rounded-xl border border-[color:var(--brand-muted)] bg-background shadow-sm">
            <Image
              src="/images/Rectangle 457.png"
              alt="Shri Tapash Mukherjee offering prayers before Maa Durga during BASA's Sharodotsav."
              width={960}
              height={720}
              className="h-auto w-full object-cover"
              priority
            />
            <figcaption className="px-4 py-3 text-xs text-[color:var(--brand-text)]/70">
              Shri Tapash Mukherjee performs pushpanjali at BASA Durga Pujo.
            </figcaption>
          </figure>

          <div className="space-y-2 text-[color:var(--brand-text)]">
            <p className="text-lg font-semibold">Shri Tapash Mukherjee</p>
            <p className="text-sm text-pretty leading-relaxed text-[color:var(--brand-text)]/85">
              Since 2008, Shri Mukherjee has been performing the sacred priestly
              duties during the Sharodotsav and Till Kali Pujo of the Bengali
              Association of South Africa. A devoted part of the BASA family, he
              continues to journey thousands of miles from Bengal every autumn,
              vowing to serve as long as his health permits.
            </p>
          </div>
        </div>

        <div className="space-y-4 text-[color:var(--brand-text)]">
          <div className="space-y-4 text-pretty leading-tight" lang="bn">
            <p>
              নমস্কার, আমি হি তাপস মুখার্জী। শত ১৭ বছর ধরে বেঙ্গলি
              অ্যাসোসিয়েশনের শ্রদ্ধা শারদোৎসব (দুর্গাপুজো) তিল কালি পুজো,
              কোয়াসিরের লক্ষ্মী পুজো এবং ঈশ্বরী শ্যামাপূজোর পূজার্চনা করে আসছি।
              এবছর ২০২৫ সালে ১৮তম বছর হবে। প্রোটের থেকে আমাদের পূজো-পার্টি
              মাস-প্রত্যেক দিন ছিল আকর্ষণীয়। ভালো লাগতো নিজ হাতে হেঁটে ছোটো
              মুতি পুজো করতে হতো।
            </p>
            <p>
              তাই ১৯৯৮ সালে তাদের আমাদের পাড়ার দুর্গা পুজো করার ডাক পেলাম। এখন
              ১৩ বছর করার পর ২০০৮ সালেই সবার অনুরোধে আকর্ষিত হয়ে ডাক পেলাম এবং
              আজও গ্লোব যে সকল জায়গা, নামকরা স্থানের এক বিশেষ অংশ হিসাবে
              উপস্থিত জ্ঞান, ভক্তের মধ্যে, সহস্রারের মধ্যে আজও ঢালা পুজো করা
              যায় কিভা? পুজোটা কিভাবে হয় দেখি? প্রভ্রের উদিত হয়ে আমার কঠিন
              একমুখে পূর্ণাঙ্গ এবং শুদ্ধ ঐতিহ্যের মাধ্যমে সমাজকে চালিত করে, যা
              একমাত্র সত্যগতি শাসনামী পারেন না। এবছর আপনারা আবারও বেঙ্গলি পূজো
              জীবনের ঐতিহ্যকে কাটিয়ে চান।
            </p>
            <p>
              আমি আনন্দের সাথে জানাচ্ছি যে BASA ও তার এত ভালোবাসার সঙ্গে আমি ১৮
              বছর ধরে জড়িত আছি। প্রত্যেক সদস্যকে যেমন আমি পরিবারের একজন হয়ে
              উঠেছি তেমনই তাদের সকলকে আমি খুব প্রেম করে পূজোর সকল সদস্যদের কথা
              মনে রাখি। আমি এখন কৃতজ্ঞতা জানাই সকলকে, দেশে যেখানেই আছি এবং
              বর্তমান সদস্যদের আমাদের সমাজে, আমাদের ভক্তদের, তাদের নিষ্ঠার
              প্রতি, একথাই আমি আজও ছাড়বো না। আমি বলবো "সে আমরা সব সময় ক্রমে
              ক্রমে দেবী মায়ের শ্রীমূর্তি হাতে ভুবন সুখে থাকি এবং BASA কে
              জ্ঞানের চেতনায় বেশি উজ্জ্বল করে।"
            </p>
            <p>
              আমি BASA কে আমার নিজের পরিবার দিয়েছি। একযোগে সকলের কাছে
              পারিবারিকভাবে, BASA র সকল সদস্যদের সঙ্গে আমি যেমন মানুষ সুখে ও
              ভালো থাকুক, তারা যারা আছে তাদের জীবন আনন্দময় হোক সবাইকে একসঙ্গে
              BASA অঙ্গীকার "জয় মা দুর্গা"।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
