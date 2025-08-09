import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AboutService } from '../../core/services/about.service';
import { AboutData, BoardMember, Objective } from '../../core/models/about.interface';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent implements OnInit {
  aboutData$!: Observable<AboutData>;
  objectives$!: Observable<Objective[]>;
  nonOfficialMembers$!: Observable<BoardMember[]>;
  officialMembers$!: Observable<BoardMember[]>;
  skvibActInfo$!: Observable<AboutData['skvibAct']>;

  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {
    this.aboutData$ = this.aboutService.getAboutData();
    this.objectives$ = this.aboutService.getObjectives();
    this.nonOfficialMembers$ = this.aboutService.getBoardMembers('non-official');
    this.officialMembers$ = this.aboutService.getBoardMembers('official');
    this.skvibActInfo$ = this.aboutService.getSkvibActInfo();
  }

  /**
   * Download PDF file
   */
  downloadPdf(url: string): void {
    window.open(url, '_blank');
  }

  /**
   * TrackBy function for objectives
   */
  trackByObjectiveId(index: number, objective: Objective): string {
    return objective.id;
  }

  /**
   * TrackBy function for board members
   */
  trackByMemberId(index: number, member: BoardMember): string {
    return member.id;
  }

  /**
   * Get initials from a name
   */
  getInitials(name: string): string {
    return name
      .split(' ')
      .map(word => word.charAt(0).toUpperCase())
      .slice(0, 2)
      .join('');
  }
}
