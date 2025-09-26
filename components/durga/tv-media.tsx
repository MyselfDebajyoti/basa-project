import Image from "next/image";
import { cn } from "@/lib/utils";

type PujoCommitteeProps = {
  className?: string;
};

export function TVMedia({ className }: PujoCommitteeProps) {
  return (
    <section className={cn("space-y-6", className)}>
      <header className="flex flex-col gap-2">
        <h2 className="text-xl font-noto-sans font-semibold text-gray-800 mb-12 text-left">
          TV Media Coverage
        </h2>
      </header>
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}

        {/* Facebook Post Embed */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white  overflow-hidden">
            <a href="https://www.youtube.com/watch?v=JXNjU6iwnq4">
              <Image
                src="/images/Screenshot 2025-09-17 at 19.22.22 1.png"
                width="500"
                height="500"
                style={{ border: "none", overflow: "hidden" }}
                alt="Facebook Post - Friends Sunday Funday with Animesh"
                className="w-full"
              ></Image>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
