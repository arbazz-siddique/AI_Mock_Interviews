import React from 'react'
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {dummyInterviews} from "@/constants";
import InterViewCard from "@/components/InterViewCard";
import {getCurrentUser, getInterviewByUserId, getLatestInterviews} from "@/lib/actions/auth.actions";

const Page = async () => {
    const  user = await getCurrentUser();

    const [userInterviews,latestInterviews ] = await Promise.all([
        await getInterviewByUserId(user?.id!),
        await getLatestInterviews({userId: user?.id})
    ])

    const hasPastInterviews = userInterviews?.length > 0;

    const hasUpcomingInterviews  = latestInterviews?.length > 0;


    return (
        <>
        <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
            <h2>Get Interview Ready With AI-Powered Practice And Feedback</h2>
            <p className="text-lg">
                Practice on real interview questions & get instance feedback
            </p>
            <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
            </Button>
        </div>
            <Image
                src="/robot.png"
                alt="robot-dude"
                width={400}
                height={400}
                className="max-sm:hidden"
                />
        </section>

            <section className="flex flex-col gap-6 mt-8">
                <h2>Your Interviews </h2>
                <div className="interviews-section">
                    {
                        hasPastInterviews ? (
                            userInterviews?.map((interview) => (
                                <InterViewCard {...interview} key={interview.id} />
                            ))) : (
                                <p>you have&apost;t taken interview yet.</p>
                            )
                    }

                </div>
            </section>

            <section className="flex flex-col gap-6 mt-8">
                <h2>Take an Interview</h2>
                <div className="interviews-section">
                    {
                        hasUpcomingInterviews ? (
                            latestInterviews?.map((interview) => (
                                <InterViewCard {...interview} key={interview.id} />
                            ))) : (
                            <p>There are no new interviews available.</p>
                        )
                    }

                </div>
            </section>
        </>
    )
}
export default Page
