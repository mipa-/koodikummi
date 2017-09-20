#!/usr/bin/perl

sub brainfuck_parser {

  my ($code, $input) = @_;
  my $cells = ();
  my $cellIndex = 0;
  my $toPrint = '';
  my $loopStart = ();
  my $loopEnd = ();
  my $inputs = 0;

  for (my $i = 0; $i < length $code; $i++)
    {
    
    #print "cells: @cells\n";
    
    if ( substr($code,$i,1) =~ /\+/ )
    {
      if ( $cells[$cellIndex] != null )
      {
        my $item = $cells[$cellIndex];
        $item++;
        $cells[$cellIndex] = $item;
      }
      else
      {
        $cells[$cellIndex] = 1;
      }
    #print "+++ $cells[$cellIndex]\n";
    }
    
    elsif ( substr($code,$i,1) =~ /\-/ )
    {
      if ( $cells[$cellIndex] != null )
      {
        my $item = $cells[$cellIndex];
        $item--;
        $cells[$cellIndex] = $item;
      }
      else
      {
        $cells[$cellIndex] = 1;
      }
    #print "--- $cells[$cellIndex]\n";
    }
    
    elsif ( substr($code,$i,1) =~ />/ )
    {
      $cellIndex++;
      #print ">>> $i $cellIndex\n";
    }
    
    elsif ( substr($code,$i,1) =~ /</ )
    {
      $cellIndex--;
      #print "<<< $i $cellIndex\n";
    }
    
    elsif ( substr($code,$i,1) =~ /\[/ )
    {
      if ($cells[$cellIndex] == 0 )
      {
        $i = pop(@loopEnd);
      }
      else
      {
        push(@loopStart,$i);
        pop(@loopEnd);
      }
    #print "[[[ @loopStart\n";
    }
    
    elsif ( substr($code,$i,1) =~ /\]/ )
    {
      push(@loopEnd,$i);
      $i = pop(@loopStart) - 1;
      #print "]]] @loopEnd\n";
    }
    
    elsif ( substr($code,$i,1) =~ /\./ )
    {
      $toPrint .= chr($cells[$cellIndex]);
      #print "... $i $cells[$cellIndex] $toPrint\n";
    }
    
    elsif ( substr($code,$i,1) =~ /\,/ )
    {
      my $temppp = substr($input,$inputs,1);
      $cells[$cellIndex] = ord($temppp);
      $inputs++;
      #print ",,, $i $toPrint\n";
    }
  }
  
  return $toPrint;

}

#my $Paula = "++++++++[>+++[>+++>++++>+++++>+++++<<<<-]>+>>>--[<]<-]>>.>+.>---.>++++.<<.";
#my $result = brainfuck_parser($Paula);
#print "$result\n";

#my $Paaba = "++++++++[>+++[>+++>++++>+++++>+++++<<<<-]>+>>>--[<]<-]>>.>+.>---,.>,.<.";
#my $result2 = brainfuck_parser($Paaba,"ab");
#print "$result2\n";

my $HelloWorld =
"++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.";
my $result3 = brainfuck_parser($HelloWorld);
print "$result3\n";

