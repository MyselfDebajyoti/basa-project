import Image from "next/image";
import { cn } from "@/lib/utils";

type PurohitMoshaiProps = {
  className?: string;
};

export function PurohitMoshai({ className }: PurohitMoshaiProps) {
  return (
    <section className={cn("space-y-6   bg-background p-6", className)}>
      <header className="space-y-2">
        <h2 className="text-xl font-noto-sans font-semibold text-gray-800 mb-12 text-left">
          Our Purohit Moshai
        </h2>
      </header>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <figure className="overflow-hidden  bg-background shadow-sm">
            <Image
              src="/images/Rectangle 457.png"
              alt="Shri Tapash Mukherjee offering prayers before Maa Durga during BASA's Sharodotsav."
              width={960}
              height={720}
              className="h-auto w-full object-cover"
              priority
            />
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
              নমস্কার, আমি শ্রী তাপস মুখার্জী। গত ১৭ বছর ধরে বেঙ্গলী
              এ্যাসোশিয়েশন অফ সাউথ আফ্রিকার (জোহানেসবার্গ) পরিচালিত শ্রী শ্রী
              শারদীয়া দুর্গা পূজো, কোজাগরী লক্ষ্মীপুজো এবং শ্রী শ্রী শ্যামাপূজোর
              পৌরহিত্য করে আসছি। এবছর ২০২৫ সাল ১৮তম বর্ষ হবে। ছোটবেলা থেকেই আমার
              পূজো-পাঠ যাগ-যজ্ঞের প্রতি ছিল আকর্ষণ। ভালো লাগতো নিজ হাতে ছোট ছোট
              মূর্তি গড়ে পূজো পাঠ করতে।
            </p>
            <p>
              হঠাৎ ১৯৯৫ সালে সালে আমাদের পাড়ার দুর্গো পুজো করার ডাক পেলাম।
              প্রায় ১৩ বছর করার পর ২০০৮ সালে সুদূর সাউথ আফ্রিকা থেকে ডাক পেলাম।
              এবছরও পাড়ি দেব পৌরহিত্য করার জন্য। রামকৃষ্ণ মিশনের এক সন্ন্যাসীর
              কাছে জানতে চেয়েছিলাম যে, ভোগের মধ্যে থেকে, সংসারের মধ্যে আবদ্ধ
              হয়ে পূজোপাঠ করা যায় কিনা? পূর্ণতা অর্জন হয় কিনা? প্রশ্নের উত্তরে
              তিনি আমাকে বলেছিলে একজন পুরোহিত তার সঠিক পৌরহিত্যের মাধ্যমে সমাজকে
              চালিত করে, যা একজন সর্বত্যাগী সন্ন্যাসী পারেন না। এরপর আমার আকর্ষণ
              আরও বেড়ে গেল। বাকী জীবনটা এইভাবেই কাটাতে চাই। আমি ভীষন ভাগ্যবান যে
              BASA র মত একটি সংগঠনের সঙ্গে দীর্ঘ ১৮ বছর ধরে জড়িয়ে আছি।
              প্রত্যেক সদস্যদের সঙ্গে আমি পরিবারের একজন হয়ে উঠেছি। কখনই মনে হয়নি
              আমি এতদূর থেকে এসেছি।
            </p>
            <p>
              তবে পুরোনো অনেক সদস্যদের কথা মনে পরে। যারা এখন কর্মসূত্রে অন্য
              কোনো দেশে রয়েছে। অতীত এবং বর্তমানে প্রত্যেক সদস্যদের আমার
              অভিনন্দন, শুভেচ্ছা ও আন্তরিক ভালবাসা। তবে, একদিন এই আসন ছাড়তেই
              হবে আমাকে। &quot;সে বয়সের ভারে হোক অন্য কোনো ভাবেই হোক। যতদিন
              শরীর ও মস্তিষ্ক সুস্থ থাকবে ততদিন যেন BASA কে জড়িয়ে চলতে পারি।
              BASA কে হারাতে চাই না। BASA আমাকে নিজস্ব পরিচিতি দিয়েছে।
            </p>
            <p>
              এবছরও মায়ের কাছে পার্থনা কবর, BASA র সকল সদস্যদের সাথে পৃথিবীর সকল
              মানুষ সুস্থ ও ভালো থাকুক। তারা যেন প্রত্যেকে নিজ নিজ জায়গায় অনেক
              সাফল্য লাভ করুক। ভীষন প্রশান্তি পাই BASA নামের মধ্যে দিয়ে। &quot;
              জয় মা দুর্গতিনাশিনী দুর্গা&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
