import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function InvoiceStatus({ status }: { status: string }) {
  let baseClass = 'inline-flex items-center rounded-full px-2 py-1 text-xs';
  let colorClass = status === 'pending' ? 'bg-gray-100 text-gray-500' : 'bg-green-500 text-white';

  return (
    <span className={`${baseClass} ${colorClass}`}>
      {status === 'pending' ? (
        <>
          Pending
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === 'paid' ? (
        <>
          Paid
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}