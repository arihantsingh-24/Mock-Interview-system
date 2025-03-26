import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from 'next/image'
import InterviewCard from "@/component/InterviewCard";

const page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview Ready with AI Powered Practice And Feedback</h2>
          <p className="text-lg">
            Practice on real interview questions and get instant feedback.
          </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/Interview">Start an Interview</Link>
          </Button>
          </div>
          <Image src="/robot.png" alt="Robo-dude" width={400} height={400} className="max-sm:hidden" />
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>
        <div className="interviews-section">
          {/* <InterviewCard {...interview} key={interview.id}/> */}
          {/* <p>You haven&apos;t taken any interviews yet</p> */}
        </div>
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an interview</h2>
        <div className="interviews-section">
        {/* <InterviewCard {...interview} key={interview.id}/> */}
          <p>There is no interview available</p>
        </div>
      </section>
    </>
  );
};

export default page;
